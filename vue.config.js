const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.sass"`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      });
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        styles: path.resolve(__dirname, 'src/assets/scss')
      }
    }
  }
};
