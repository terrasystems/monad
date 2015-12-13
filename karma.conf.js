
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
        'tests/setup.js',
        'tests/**/*.spec.js',
        'src/**/*.html'
    ],
    ngHtml2JsPreprocessor: {
        moduleName: 'TEMPLATES',
        stripPrefix: 'src\/',
        prependPrefix: '../monad/'
    },
    exclude: [
    ],
    preprocessors: {
        'tests/**/*.js': ['browserify'],
        'src/**/*.html': ['ng-html2js']
    },
    browserify: {
        debug: true,
        transform: ['babelify']
    },
    babelPreprocessor: {
        options: {
            presets: ['es2015']
        }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};

