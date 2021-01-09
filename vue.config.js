module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
}

/* To enable adding txt-files
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
 */