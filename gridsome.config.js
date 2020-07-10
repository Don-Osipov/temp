// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss')
      ]
    });
}

module.exports = {
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },

  siteName: 'Gridsome',
  plugins: [],
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      }
    ]
  }
};
