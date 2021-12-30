const babel = function ({ cache }) {
  cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '^~(.+)': './app/\\1',
          },
        },
      ],
    ],
  };
};

module.exports = babel;
