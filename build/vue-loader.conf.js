'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = process.env.NODE_ENV === 'production'
  ? config.build.productionSourceMap
  : (process.env.NODE_ENV === 'prodtest'?config.buildtest.productionSourceMap:config.dev.cssSourceMap)

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'prodtest'
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
