(function(window, videojs) {
  // 4.0 plugin with 5.0 video.js
  if (videojs.getComponent) {
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

  } else {
    // 5.0 plugin with 4.0 video.js
    videojs.EventTarget = videojs.EventEmitter;
    videojs.getComponent = function(componentName) {
      return videojs[componentName];
    };
    videojs['extends'] = function(component, options) {
      if (options.constructor) {
        options.init = options.constructor;
      }
      return component.extend(options);
    };
    videojs.mergeOptions = videojs.util.mergeOptions;
    videojs.browser = videojs;
    videojs.registerComponent = function(componentName, component) {
      videojs[componentName] = component;
    };
  }
})(window, window.videojs);
