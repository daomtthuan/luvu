module.exports = ({ cache }) => {
  cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~(.+)': './app/\\1',
            app: './app/index.ts',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
