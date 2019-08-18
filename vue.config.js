module.exports = {
<<<<<<< HEAD
    // productionSourceMap: false,
    lintOnSave: false,
    publicPath: './',
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
=======
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
>>>>>>> ee554633865584a643a426795eeac7114a0649f8
    }
  },
};