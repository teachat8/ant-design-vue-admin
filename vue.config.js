// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true // 解决引入antd.less样式报错
      },
    }
  }
}