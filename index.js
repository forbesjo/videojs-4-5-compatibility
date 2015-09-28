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

  var Component = videojs.getComponent('Component');
  Component.oldExtend_ = Component.extend;
  Component.extend = function(proto) {
    if (proto.remainingTime && !proto.scrubbing) {
      proto.scrubbing = function() {};
    }
    return this.oldExtend_(proto);
  };

  Object.keys(Component.components_)
    .forEach(function(component) {
      videojs[component] = videojs.getComponent(component);
      if (!videojs[component].extend) {
        videojs[component].oldExtend_ = Component.oldExtend_;
        videojs[component].extend = Component.extend;
      }
    });

  videojs.round = function(x, y) {
    videojs.log.warn('videojs.round(x, y) is deprecated. Use Number(x.toFixed(y)) instead.');
    return Number(x.toFixed(y));
  };

  videojs.trim = function(x) {
    videojs.log.warn('videojs.trim(x) is deprecated. Use x.trim() instead.');
    return x.trim();
  };

  videojs.obj = {
    isArray: Array.isArray
  };

})(window, window.videojs);
