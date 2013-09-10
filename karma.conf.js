module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: ".",

    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      // html fixtures
      { pattern: "test/fixtures/*.html", watched: true, served: true, included: false },

      // application scripts
      "app/lib/jquery.min.js",

      // fixtures code
      "test/helpers/jasmine-jquery.js",
      "test/helpers/fixtures.js",

      // application code
      "app/app.js",

      // application tests
      "test/spec/*.js"
    ],

    // list of files to exclude
    exclude: [

    ],

    preprocessors: {"*/.html": [] },

    // test results reporter to use
    // possible values: "dots", "progress", "junit"
    reporters: ["progress"],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ["PhantomJS"],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 20000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins: [
      "karma-jasmine",
      "karma-phantomjs-launcher"
    ]
  });
};
