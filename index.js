(function(window, videojs) {
  window.vjs = videojs;

  videojs.util = {
    mergeOptions: function() {
      videojs.log.warn('videojs.util.mergeOptions is deprecated. Use videojs.mergeOptions instead.');
      return videojs.mergeOptions.apply(null, arguments);
    }
  };

  videojs.JSON = JSON;
  videojs.USER_AGENT = window.navigator.userAgent;
  videojs.EventEmitter = videojs.EventTarget;

  Object.keys(videojs.browser)
    .forEach(function(key) {
      videojs[key] = videojs.browser[key];
    });

  Object.keys(videojs.getComponent('Component').components_)
    .forEach(function(component) {
      videojs[component] = videojs.getComponent(component);
    });

  videojs.round = function(x, y) {
    videojs.log.warn('videojs.round(x, y) is deprecated. Use Number(x.toFixed(y)) instead.');
    return Number(x.toFixed(y));
  };

  videojs.trim = function(x) {
    videojs.log.warn('videojs.trim(x) is deprecated. Use x.trim() instead.');
    return x.trim();
  };
})(window, window.videojs);