module.exports = {
    productionSourceMap: false,
    publicPath: './',
    lintOnSave: process.env.NODE_ENV !== 'prod',
    devServer: {
        overlay: {
          warnings: false,
          errors: false
        }
    },
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
};