/* @flow */

import webpackManifest from '../dist/manifest.json'

type ChunksType = {
  bundle: string,
  vendor: string,
  stylesLocal: string,
  stylesGlobal: string
}

export default (req: Object, res: Object, next: () => void) => {
  const chunks: ChunksType = {
    bundle: webpackManifest['bundle.js'],
    vendor: webpackManifest['vendor.js'],
    stylesLocal: webpackManifest['localcss.css'],
    stylesGlobal: webpackManifest['bundle.css']
  }
  if (chunks) {
    req.chunk = chunks
    next()
  }
}
