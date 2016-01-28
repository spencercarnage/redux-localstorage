'use strict';

module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['browserify', 'jasmine'],
    browsers: ['Chrome'],
    files: ['test.js'],
    preprocessors: {
      'test.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: ['babelify']
    }
  });
};
