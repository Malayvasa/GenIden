var assert = chai.assert;

describe('Context API', function() {

    describe('fill', function() {
        testRender('fill after stroke', function(ctx) {
            ctx.fillStyle = 'gray';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 20;
            ctx.rect(20, 20, 50, 50);
            ctx.stroke();
            ctx.fill();
        });
    });

    describe('fill', function() {
        testRender('fill before stroke', function(ctx) {
            ctx.fillStyle = 'gray';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 20;
            ctx.rect(20, 20, 50, 50);
            ctx.fill();
            ctx.stroke();
        });
    });

    describe('stroke', function() {
        testRender('stroke and lineWidth', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 20;
            ctx.rect(20, 20, 50, 50);
            ctx.stroke();
        });
    });

    describe('closePath', function() {
        testRender('closePath and moveTo', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.lineTo(100, 10);
            ctx.moveTo(0, 50);
            ctx.lineTo(100, 50);
            ctx.lineTo(100, 100);
            ctx.closePath();
            ctx.stroke();
        });
    });

    describe('rect', function() {
        testRender('rect', function(ctx) {
            ctx.fillStyle = '#ccc';
            ctx.rect(20, 20, 50, 50);
            ctx.fill();
        });
    });

    describe('stroke', function() {
        // See also: https://github.com/gliffy/canvas2svg/pull/20
        testRender('ctx.stroke and ctx.closePath: including Z', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.lineTo(50, 50);
            ctx.lineTo(80, 20);
            ctx.stroke(); // currentDefaultPath not including the final Z
            ctx.closePath();
        });
        // See also: https://github.com/gliffy/canvas2svg/pull/20
        testRender('ctx.stroke and ctx.closePath: excluding Z', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.lineTo(50, 50);
            ctx.lineTo(80, 20);
            ctx.closePath();
            ctx.stroke(); // currentDefaultPath including the final Z
        });
    });

    describe('arc', function() {
        testRender('arc#1', function(ctx) {
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 100, 0, Math.PI / 2);
            ctx.stroke();
        });
    });

    describe('arcTo', function() {
        // Example from https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo
        testRender('arcTo#1', function(ctx) {
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.arcTo(100, 100, 0, 100, 100);
            ctx.stroke();
        });

        testRender('arcTo#2', function(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(75, 10);
            ctx.arcTo(75, 50, 25, 10, 15);
            ctx.strokeStyle = 'black';
            ctx.stroke();
        });

        testRender('arcTo#3', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.fillStyle = 'gray';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(50, 100);
            ctx.arcTo(0, 0, 100, 0, 30);
            ctx.stroke();
        });

        testRender('arcTo: test fill', function(ctx) {
            ctx.strokeStyle = '#000';
            ctx.fillStyle = 'gray';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(35, 65);
            ctx.arcTo(30, 20, 85, 20, 20);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        });

        testRender('arcTo: Negative values for radius must cause the implementation to throw an IndexSizeError exception', function(ctx) {
            assert.throws(function() {
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arcTo(0, 0, 100, 100, -1);
            });
        });

        // chrome and firefox have different behavior
        // this is same as chrome
        var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
        if (isChrome) {
            testRender('arcTo: must first ensure there is a subpath for (x1, y1).', function(ctx) {
                // canvas's api just ignore it and do nothing
                ctx.beginPath();
                ctx.arcTo(100, 100, 0, 100, 15);
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'black';
                ctx.stroke();
            });
        }

        testRender('arcTo: If the point (x0, y0) is equal to the point (x1, y1), then the method must add the point (x1, y1) to the subpath, and connect that point to the previous point (x0, y0) by a straight line.', function(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.arcTo(0, 10, 100, 100, 10);
            ctx.lineTo(50, 50);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        });

        testRender('arcTo: If the point (x1, y1) is equal to the point (x2, y2), then the method must add the point (x1, y1) to the subpath, and connect that point to the previous point (x0, y0) by a straight line.', function(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.arcTo(100, 100, 100, 100, 10);
            ctx.lineTo(50, 50);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        });

        testRender('arcTo: If the radius radius is zero, then the method must add the point (x1, y1) to the subpath, and connect that point to the previous point (x0, y0) by a straight line.', function(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, 10);
            ctx.arcTo(50, 100, 100, 0, 0);
            ctx.lineTo(50, 50);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        });

        testRender('arcTo: if the points (x0, y0), (x1, y1), and (x2, y2) all lie on a single straight line, then the method must add the point (x1, y1) to the subpath, and connect that point to the previous point (x0, y0) by a straight line', function(ctx) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arcTo(50, 50, 100, 100, 10);
            ctx.lineTo(100, 0);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        });

        testRender('arcTo: must connect the point (x0, y0) to the start tangent point by a straight line', function(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.moveTo(0, 0);
            ctx.arcTo(100, 100, 0, 100, 20);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#000';
            ctx.stroke();
        });

        testRender('arcTo: arcTo after arc (test subpath)', function(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(0, 0);
            ctx.arc(50, 50, 30, -Math.PI/2, Math.PI/2);
            ctx.arcTo(100, 100, 0, 100, 10);
            ctx.strokeStyle = '#000';
            ctx.stroke();
        });
    });
});
