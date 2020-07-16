# svgcanvas

[![build](https://travis-ci.org/zenozeng/svgcanvas.svg)](https://travis-ci.org/zenozeng/svgcanvas)

I create this repo because I need a mock &lt;canvas&gt; element for my [p5.js-svg](https://github.com/zenozeng/p5.js-svg).
This lib is mainly based on gliffy's great work: [canvas2svg](https://github.com/gliffy/canvas2svg).

You should use [gliffy's canvas2svg](https://github.com/gliffy/canvas2svg) if what you want is a clean and simple canvas context API.

The major difference is that: this lib also adds some mock API for **element** (such as width, height, style, className, getBoundingClientRect, toDataURL).

Note this lib also adds some dirty API (such as context API call history for debug, gc some invisible elements). These API are some how very dirty, so I did not pull request for these API. However, they are useful and necessary for my [p5.js-svg](https://github.com/zenozeng/p5.js-svg), so I keep them in my lib.

## Usage

```javascript
var svgcanvas = new SVGCanvas();
svgcanvas.width = 100;
var height = svgcanvas.height;
var ctx = svgcanvas.getContext('2d');
svgcanvas.toDataURL('image/jpeg', function(err, jpeg) {
    console.log(jpeg);
});
```

## Features

### Element

- canvas.width
- canvas.height
- canvas.style
- canvas.className
- canvas.id
- canvas.getContext('2d')
- canvas.getBoundingClientRect()
- canvas.toDataURL()

    This method support image/jpeg | image/png | image/svg+xml.
    Note that sync api for jpeg and png is only available in chrome due to image load issue.

- canvas.toObjectURL();

    Note: you should always use URL.revokeObjectURL after your work done

### Context

- ctx.save
- ctx.restore
- ctx.scale
- ctx.rotate
- ctx.translate
- ctx.transform
- ctx.beginPath
- ctx.moveTo
- ctx.closePath
- ctx.lineTo
- ctx.bezierCurveTo
- ctx.quadraticCurveTo
- ctx.arcTo
- ctx.stroke
- ctx.fill
- ctx.rect
- ctx.fillRect
- ctx.strokeRect
- ctx.clearRect (Buggy, see also: [canvas2svg#19](https://github.com/gliffy/canvas2svg/issues/19))
- ctx.createLinearGradient
- ctx.createRadialGradient
- ctx.fillText
- ctx.strokeText
- ctx.measureText
- ctx.arc
- ctx.clip
- ctx.drawImage
- ctx.createPattern
- ctx.imageSmoothingEnabled

    Note: this is implemented using `properties["shape-rendering"] = "crispEdges"`, and may get different behavior in SVG and Canvas.

- Simple value check for fillStyle, strokeStyle

### Other

- ctx.__history

    This array collect all (up to 1000) context call.
    Will only be available if debug on. (`new SVGCanvas({debug: true})`)

- It will gc some invisible elements to save resources

    This maybe aggressive and dirty, however it's necessary if you have to use it for animation.
    When fillRect or clearRect called, if its args matches `0, 0, canvas.width, canvas.height`

## Unit Test

See p5.js-svg's Unit Test:

http://zenozeng.github.io/p5.js-svg/test/

## Contribute

You should always contribute to [canvas2svg](https://github.com/gliffy/canvas2svg) if it's context API issue.
Together, we can make a better canvas2svg library.

## License

The MIT License (MIT)

Copyright (c) 2015 Zeno Zeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This program incorporates work covered by the following copyright and permission notices:

- canvas2svg

    ```
    The MIT License (MIT)
    Copyright (c) 2014 Gliffy Inc.
    ```
