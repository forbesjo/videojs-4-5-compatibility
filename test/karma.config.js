var browsers = ['PhantomJS'];

if (!process.env.TRAVIS_PULL_REQUEST) {
  browsers.push('Chrome', 'Firefox');
}

module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],

    browsers: browsers,

    files: [
      '../node_modules/video.js/dist/video.js',
      '../index.js',
      'test.js'
    ],

    singleRun: true
  });
};
