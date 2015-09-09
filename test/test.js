test('Functions are restored', function() {
  var constants = [
      'IS_IPHONE',
      'IS_IPAD',
      'IS_IPOD',
      'IS_IOS',
      'IOS_VERSION',
      'IS_ANDROID',
      'ANDROID_VERSION',
      'IS_OLD_ANDROID',
      'IS_NATIVE_ANDROID',
      'IS_FIREFOX',
      'IS_CHROME',
      'IS_IE8',
      'TOUCH_ENABLED',
      'BACKGROUND_SIZE_SUPPORTED'
    ],
    i = 0;

  for (i = 0; i < constants.length; i++) {
    ok(videojs.hasOwnProperty(constants[i]));
  }

  ok(vjs);
  ok(videojs.util.mergeOptions);
  ok(videojs.JSON);
  ok(videojs.USER_AGENT);
  ok(videojs.EventEmitter);

  ok(videojs.Button.extend);

  ok(videojs.round);
  ok(videojs.trim);
});
