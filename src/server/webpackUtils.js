/* @flow */

import webpackManifest from '../dist/manifest.json'
/*import webpackChunkManifest from '../dist/chunk-manifest.json'*/

function getChunksProps (): Object {
  return {
    bundle: webpackManifest['bundle.js'],
    vendor: webpackManifest['vendor.js'],
    stylesLocal: webpackManifest['localcss.css'],
    stylesGlobal: webpackManifest['bundle.css']
    /*webpackChunkManifest: JSON.stringify(webpackChunkManifest)*/
  }
}

export default {
  getChunksProps
}
