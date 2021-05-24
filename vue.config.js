module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'common': '@/common',
        'router': '@/router',
        'store': '@/store',
        'views': '@/views',
        'assets': '@/assets',
        'network': '@/network',
        'static': '@/static'
      }
    }
  }
}