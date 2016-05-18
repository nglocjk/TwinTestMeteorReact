App.info({
  id: 'com.twin.RealEstate',
  name: 'Twin Real Estate',
  description: 'Sales app',
  author: 'Twin Software Solutions',
  email: 'vuongnd@twin.vn',
  website: 'http://twin.vn',
  version: '1.1.2'
});
App.icons({
  // iOS
  'iphone': 'public/images/icons/ios/Icon-60.png',
  'iphone_2x': 'public/images/icons/ios/Icon-60@2x.png',
  'iphone_3x': 'public/images/icons/ios/Icon-60@3x.png',
  'ipad': 'public/images/icons/ios/Icon-76.png',
  'ipad_2x': 'public/images/icons/ios/Icon-76@2x.png',

  // Android
  'android_ldpi': 'public/images/icons/android/icon-36x36.png',
  'android_mdpi': 'public/images/icons/android/icon-48x48.png',
  'android_hdpi': 'public/images/icons/android/icon-72x72.png',
  'android_xhdpi': 'public/images/icons/android/icon-96x96.png'
});
App.launchScreens({
  // iOS
  "iphone": "public/images/splash/1x_Portrait_320_480.png",
  "iphone_2x": "public/images/splash/2x_Portrait_640_960.png",
  "iphone5": "public/images/splash/2x_Portrait_640_1136.png",
  "iphone6": "public/images/splash/2x_Portrait_750_1334.png",
  "iphone6p_portrait": "public/images/splash/2x_Portrait_1242_2208.png",
  // "iphone6p_landscape": "public/images/splash/2x_Landscape_2208_1242.png",
  "ipad_portrait": "public/images/splash/1x_Portrait_768_1024.png",
  "ipad_portrait_2x": "public/images/splash/2x_Portrait_1536_2048.png",
  // "ipad_landscape": "resources/splashes/ios/1x_Landscape_1024_768.png",
  // "ipad_landscape_2x": "resources/splashes/ios/2x_Landscape_2048_1536.png",

  // Android
  //'android_ldpi_portrait': 'public/images/splash/splash-200x320.png',
  // 'android_ldpi_landscape': 'public/img/splash/splash-320x200.png',
  'android_mdpi_portrait': 'public/images/splash/splash-320x480.png',
  // 'android_mdpi_landscape': 'public/img/splash/splash-480x320.png',
  'android_hdpi_portrait': 'public/images/splash/splash-480x800.png',
  // 'android_hdpi_landscape': 'public/img/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'public/images/splash/splash-720x1280.png',
// 'android_xhdpi_landscape': 'public/img/splash/splash-1280x720.png',
});

//App.setPreference('Orientation', 'portrait');
App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#03a9f4');
App.accessRule('*');
// App.accessRule('https://img.deca.vn/*');
// App.accessRule('https://deca.vn/*');
// App.accessRule('https://123.30.129.157/*');
