const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../src/app/components/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: custom.resolve,
      module: { ...config.module, rules: custom.module.rules }
    };
  },
};
