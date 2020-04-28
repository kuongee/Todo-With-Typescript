const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-actions/register'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.ts$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ]
    });

    config.resolve.extensions.push('.ts');

    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../assets')
    });
    return config;
  }
};
