module.exports = {
   lintOnSave: false,
   publicPath: './',
   indexPath: 'index.html',
   outputDir: 'dist',
   pages: {
    page1: {
      entry: "./src/views/page1/index.js", // 配置入口js文件
      template: "./src/views/page1/index.html", // 主页面
      filename: "page1.html", // 打包后的html文件名称
      title: "page1", // 打包后的.html中<title>标签的文本内容
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'page1']
  },
  page2: {//新增的部份
      entry: "./src/views/page2/index.js", // 配置入口js文件
      template: "./src/views/page2/index.html", // 主页面
      filename: "page2.html", // 打包后的html文件名称
      title: "page2", // 打包后的.html中<title>标签的文本内容
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'page2']
  },  
   },
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
