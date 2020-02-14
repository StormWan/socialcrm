const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  // outputDir: 'docs',
  publicPath: './',
  // assetsPublicPath: './',
  // publicPath: process.env.NODE_ENV === 'production' ? '/static/dist' : './',
  outputDir: 'static/dist',
  assetsDir: '',
  indexPath: '../../static/dist/index.html',
  // indexPath: '../../templates/front/index.html',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 15,
            propList: ['*']
          })
        ]
      }
    }
  }
}
