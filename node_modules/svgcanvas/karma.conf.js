module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        client: {
            requireJsShowNoTimestampsError: false
        },
        files: [
            'dist/umd/svgcanvas.js',
            'test/lib/mocha.js',
            'test/lib/chai.js',
            'test/lib/test.js',
            'test/context.js',
            'test/element.js'
        ],
        preprocessors: {
            'dist/**/*.js': ['coverage']
        },
        reporters: ['progress', 'coverage', 'mocha'],
        coverageReporter: {
            type : 'html',
            dir : 'test/coverage/',
            subdir: function(browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_DISABLE,
        autoWatch: false,
        browsers: ['Firefox', 'Chrome'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true // output all logs to stdout instead of click debug button
    });
};
