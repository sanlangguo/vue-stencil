module.exports = {
  productionSourceMap: false,
  publicPath: './',
  css: {
      extract: true,
      sourceMap: false,
      loaderOptions: {},
      modules: false
  },
  configureWebpack: {
    output: {
      filename: 'javascript/[name].[hash].js',
      chunkFilename: 'javascript/[name].[hash].js'
    }
  },
};