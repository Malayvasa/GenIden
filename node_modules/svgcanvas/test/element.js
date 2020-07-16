var assert = chai.assert;

var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

describe('Element API', function() {

    describe('toDataURL', function() {

        var svgCanvas = new SVGCanvas();
        var ctx = svgCanvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(10, 10, 100, 100);
        ctx.closePath();
        ctx.strokeStyle = '#000';
        ctx.stroke();

        it('should export svg', function() {
            var dataurl = svgCanvas.toDataURL();
            assert.notEqual(dataurl.indexOf(encodeURI('M 10 10 L 110 10 L 110 110 L 10 110 L 10 10')),
                            -1);
        });

        if (isChrome) {
            it('should export png in chrome', function() {
                var dataurl = svgCanvas.toDataURL('image/png');
                assert.notEqual(dataurl.indexOf('data:image/png'), -1);
            });
        }

        if (isChrome) {
            it('should export jpeg in chrome', function() {
                var dataurl = svgCanvas.toDataURL('image/jpeg');
                assert.notEqual(dataurl.indexOf('data:image/jpeg'), -1);
            });
        }

        it('should throw error when exporting unknown type', function() {
            assert.throws(function() {
                svgCanvas.toDataURL('unknown-type');
            });
        });

    });

});
