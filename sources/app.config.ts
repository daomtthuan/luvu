import { ConfigContext, ExpoConfig } from '@expo/config';

import { description, displayName, name, packageName, repository, version } from './package.json';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,

    name: displayName,
    description: description,
    slug: name,
    privacy: 'unlisted',
    version: version,
    platforms: ['android', 'ios', 'web'],
    entryPoint: './index.js',
    githubUrl: repository,
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    backgroundColor: '#fff',
    primaryColor: '#fff',
    icon: './app/assets/icon.png',
    scheme: 'exp',
    updates: {
      fallbackToCacheTimeout: 0,
    },
    androidStatusBar: {
      backgroundColor: '#fff',
      barStyle: 'dark-content',
    },
    splash: {
      image: './app/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#fff',
    },
    ios: {
      bundleIdentifier: packageName,
      supportsTablet: true,
      // config: {
      //   googleSignIn: {
      //     reservedClientId: 'com.googleusercontent.apps.159581819145-ieefjamh7c6mvcc8pdecjgciq3druprn',
      //   },
      // },
      // googleServicesFile: './src/configs/google-services/ios.plist',
    },
    android: {
      package: packageName,
      adaptiveIcon: {
        foregroundImage: './app/assets/adaptive-icon.png',
        backgroundColor: '#fff',
      },
      // googleServicesFile: './src/configs/google-services/android.json',
      softwareKeyboardLayoutMode: 'pan',
    },
    web: {
      favicon: './app/assets/favicon.png',
    },
  };
};
