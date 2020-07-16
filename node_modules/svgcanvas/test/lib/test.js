(function(global) {

    var countNonTransparentPixels = function(canvas) {
        var ctx = canvas.getContext('2d');
        var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        var count = 0;
        for (var i = 3; i < imgdata.length; i += 4) {
            if (imgdata[i] > 0) {
                count++;
            }
        }
        return count;
    };

    global.testRender = function(describe, render) {
        var title = document.createElement('h3');
        title.innerHTML = describe;

        var canvas = document.createElement('canvas');
        canvas.title = "Canvas";
        var svgCanvasContainer = document.createElement('div');
        svgCanvasContainer.className = 'svg';
        var svgCanvas = new SVGCanvas();
        svgCanvasContainer.appendChild(svgCanvas.svg);
        svgCanvasContainer.title = "SVG";
        var diffCanvas = document.createElement('canvas');
        diffCanvas.title = "XOR";
        var diffCanvas2 = document.createElement('canvas');
        diffCanvas2.title = "XOR (with thin line removed (using 8-connected neighborhood < 5))";

        var fn = document.createElement('pre');
        fn.className = 'function';
        fn.innerHTML = render.toString().replace(/function(.*).*\{/g, '').replace(/}/g, '').replace(/^\s*|(\n)\s*/g, '$1');

        [title, fn, svgCanvasContainer, canvas, diffCanvas, diffCanvas2].forEach(function(elt) {
            document.body.appendChild(elt);
        });

        it(describe, function(done) {
            [canvas, svgCanvas].forEach(function(canvas) {
                canvas.width = 100;
                canvas.height = 100;
                render(canvas.getContext('2d'), canvas);
            });

            [diffCanvas, diffCanvas2].forEach(function(canvas) {
                canvas.width = 100;
                canvas.height = 100;
            });

            var ctx = diffCanvas.getContext('2d');
            // svgCanvas.toDataURL(function(err, svg) {
            (function(svg) {
                var img = new Image();
                var onload = function() {
                    var width = canvas.width;
                    var height = canvas.height;

                    ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0);
                    var imgData1 = ctx.getImageData(0, 0, width, height);

                    ctx.clearRect(0, 0, width, height);
                    ctx.drawImage(canvas, 0, 0);
                    var imgData2 = ctx.getImageData(0, 0, width, height);

                    ctx.clearRect(0, 0, width, height);
                    var diffImgData = ctx.getImageData(0, 0, width, height);
                    for (var i = 0; i < imgData1.data.length; i += 4) {
                        var indexes = [i, i+1, i+2, i+3];
                        if(indexes.some(function(i) {
                            return imgData1.data[i] != imgData2.data[i];
                        })) {
                            diffImgData.data[i+3] = 255; // set black
                        }
                    }
                    ctx.putImageData(diffImgData, 0, 0);

                    // 在 diffCanvas2 中绘制 diffCanvas 除去 1px 之后的结果
                    // 计算八连通中的像素数以确认是否是由于渲染造成的1px渲染差异
                    // 注意这样的话，线宽应该要至少大于1
                    var imgData = diffImgData;
                    var imgDataCopy = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    var getPixelIndex = function(x, y) {
                        return (y * width + x) * 4 + 3;
                    };
                    var getPixel = function(x, y) {
                        var alphaIndex = getPixelIndex(x, y);
                        return imgDataCopy.data[alphaIndex];
                    };
                    var setPixel = function(x, y, value) {
                        imgData.data[getPixelIndex(x, y)] = value;
                    };
                    for (var x = 1; x < width - 1; x++) {
                        for (var y = 1; y < height - 1; y++) {
                            if (getPixel(x, y) == 0) {
                                continue; // ignore transparents
                            }
                            // 检查八连通
                            var links = [
                                {x: x - 1, y: y - 1},
                                {x: x, y: y - 1},
                                {x: x + 1, y: y - 1},
                                {x: x - 1, y: y},
                                {x: x + 1, y: y},
                                {x: x - 1, y: y + 1},
                                {x: x, y: y + 1},
                                {x: x + 1, y: y + 1}
                            ].map(function(p) {
                                return getPixel(p.x, p.y);
                            }).filter(function(val) {
                                return val > 0; // not transparent?
                            }).length;

                            if (links < 5) { // 是条单线
                                setPixel(x, y, 0); // make it transparent
                            }
                        }
                    }
                    diffCanvas2.getContext('2d').putImageData(imgData, 0, 0);

                    var pixels = countNonTransparentPixels(canvas);
                    var xor = countNonTransparentPixels(diffCanvas2);
                    var rate = xor / pixels;
                    if (rate > 0.1) {
                        var err = new Error("xorRate > 0.1, " + JSON.stringify({xor: xor, pixels: pixels, rate: rate}));
                        done(err);
                    } else {
                        done();
                    }
                };
                img.onload = function() {
                    onload();
                    URL.revokeObjectURL(svg);
                };
                img.src = svg;
            })(svgCanvas.toObjectURL());
        });
    };

})(this);
