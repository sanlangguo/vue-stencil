module.exports = {
   lintOnSave: false,
   publicPath: './',
   productionSourceMap: false,
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
    },
    externals: {
     'vue': 'Vue',
     'vue-router': 'VueRouter',
     'axios': 'axios',
   },
  },
};
