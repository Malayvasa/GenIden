#!/bin/bash

sed -i 's/window.C2S = ctx/module.exports = ctx/' src/canvas2svg.js

version=$(cat package.json | grep version | sed 's/[^0-9.]*//g')

header="/*!!
 *  svgcanvas v$version
 *  Provide <canvas>'s element API and context API using SVG
 *
 *  Copyright (C) 2015-2016 Zeno Zeng
 *  Licensed under the MIT license.
 *
 *  This program incorporates Gliffy Inc's canvas2svg,
 *  which is licensed under the MIT license.
 */
"

echo "building dist/umd/svgcanvas.js"

content=$(browserify src/svgcanvas.js -s SVGCanvas)
cat > dist/umd/svgcanvas.js <<EOF
$header
$content
EOF

echo "building dist/amd/svgcanvas.js"

content=$(cat src/canvas2svg.js src/context.js src/svgcanvas.js | sed 's/.*module.exports = ctx/    C2S = ctx/' | sed 's/.*\(module\|require\).*//' | sed 's/^/    /' | sed '/^ *$/d')

cat > dist/amd/svgcanvas.js <<EOF
$header
define(function() {
    var C2S;
$content
    return SVGCanvas;
});
EOF
