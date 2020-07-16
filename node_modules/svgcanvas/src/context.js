var C2S = require('./canvas2svg');

var Context = function(width, height, options) {
    C2S.call(this);
    this.__width = width;
    this.__height = height;
    this.generations = [[]]; // used to collect element references for different generations

    var _this = this;
    this.__imageSmoothingEnabled = true;

    ["mozImageSmoothingEnabled",
     "webkitImageSmoothingEnabled",
     "msImageSmoothingEnabled",
     "imageSmoothingEnabled"].forEach(function(k) {
         Object.defineProperty(_this, k, {
             get: function() {
                 return _this.__imageSmoothingEnabled;
             },
             set: function(val) {
                 _this.__imageSmoothingEnabled = val;
             }
         });
     });

    options = options || {};

    ["fillStyle", "strokeStyle"].forEach(function(prop) {
        var key = "__" + prop;
        Object.defineProperty(_this, prop, {
            get: function() {
                return _this[key];
            },
            set: function(val) {
                if (val.indexOf('NaN') > -1) {
                    console.warn("svgcanvas: invalid value for " + prop + ", fail to set it to " + val);
                    return;
                }
                _this[key] = val;
            }
        });
    });


    if (options.debug) {
        this.__history = []; // method history

        var methods = [];
        for(var key in this) {
            if (typeof this[key] === "function") {
                if (key.indexOf('__') !== 0) {
                    if (key !== 'getSerializedSvg') {
                        methods.push(key);
                    }
                }
            }
        }
        ["__fillStyle", "__strokeStyle"].forEach(function(prop) {
            var key = "__debug__" + prop;
            Object.defineProperty(_this, prop, {
                get: function() {
                    return _this[key];
                },
                set: function(val) {
                    var call = prop.replace(/__/g, '') + " = " + val;
                    _this.__history.push(call);
                    _this[key] = val;
                }
            });
        });
        methods.forEach(function(method) {
            var fn = _this[method];
            _this[method] = function() {
                var call = method + '(' + Array.prototype.slice.call(arguments).join(', ') + ');';

                // keep call history
                _this.__history.push(call);
                if (_this.__history.length > 100) {
                    _this.__history.shift();
                }

                return fn.apply(_this, arguments);
            };
        });
    }
};

Context.prototype = Object.create(C2S.prototype);

Context.prototype.scale = function(x, y) {
    if (x === undefined || y === undefined) {
        return;
    } else {
        C2S.prototype.scale.apply(this, arguments);
    }
};

Context.prototype.__createElement = function(elementName, properties, resetFill) {
    if (!this.__imageSmoothingEnabled) {
        // only shape elements can use the shape-rendering attribute
        if (["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"].indexOf(elementName) > -1) {
            properties = properties || {};
            properties["shape-rendering"] = "crispEdges"; // disable anti-aliasing
        }
    }

    var element = C2S.prototype.__createElement.call(this, elementName, properties, resetFill);
    var currentGeneration = this.generations[this.generations.length - 1];
    currentGeneration.push(element);
    return element;
};

Context.prototype.__gc = function() {
    this.generations.push([]);
    var ctx = this;
    // make sure it happens after current job done
    // for example: in p5.js's redraw use setTimeout will make gc called after both save() and restore() called
    setTimeout(function() {
        if (ctx.__groupStack.length > 0) {
            // we are between ctx.save() and ctx.restore(), skip gc
            return;
        }
        if (ctx.__currentElement.nodeName === 'path') {
            // we are still in path, skip gc
            return;
        }
        // keep only latest generation
        while (ctx.generations.length > 1) {
            var elements = ctx.generations.shift();
            var lastCount = 0;
            var count = elements.length;
            while (count > 0) {
                lastCount = count;
                elements = elements.filter(function(elem) {
                    // in case children may from live generation, gc from bottom to top
                    var children = elem.children || elem.childNodes; // childNodes for IE
                    if (children.length === 0) {
                        elem.parentNode.removeChild(elem);
                        return false;
                    } else {
                        return true;
                    }
                });
                count = elements.length;
                if (count === lastCount) {
                    // could not gc more, exit now
                    // save this elements to live generation
                    var liveGeneration = ctx.generations[ctx.generations.length - 1];
                    elements.forEach(function(elem) {
                        liveGeneration.push(elem);
                    });
                    // exit
                    break;
                }
            }
        }
    }, 0);
};

/**
 * Clear full canvas and do gc
 * @private
 */
Context.prototype.__clearCanvas = function() {
    // remove all
    this.generations.forEach(function(elems) {
        elems.forEach(function(elem) {
            if (elem) {
                elem.parentNode.removeChild(elem);
            }
        });
    });
    this.generations = [[]];
    var g = this.__createElement('g');
    this.__root.appendChild(g);
    this.__currentElement = g;
};

Context.prototype.clearRect = function(x, y, w, h) {
    if (x === 0 && y === 0 && w === this.__width && h === this.__height) {
        this.__clearCanvas();
    } else {
        C2S.prototype.clearRect.call(this, x, y, w, h);
    }
};

Context.prototype.fillRect = function(x, y, w, h) {
    if (x === 0 && y === 0 && w === this.__width && h === this.__height) {
        this.__gc();
    }
    C2S.prototype.fillRect.call(this, x, y, w, h);
};

// Simple version of drawImage
// Note that this version does not handle drawing mock context
Context.prototype.drawImage = function() {
    var canvas = document.createElement('canvas');
    canvas.width = this.__width;
    canvas.height = this.__height;
    var args = arguments;
    var ctx = canvas.getContext('2d');
    ctx.drawImage.apply(ctx, args);
    // Note: don't use foreign object,
    // otherwise the saved SVG may be unusable for other application
    var url = canvas.toDataURL('image/png');
    var image = this.__createElement('image', {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height,
        preserveAspectRatio: 'none'
    });
    var parent = this.__closestGroupOrSvg();
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
    parent.appendChild(image);
};

Context.prototype.getSerializedSvg = null;

module.exports = Context;
