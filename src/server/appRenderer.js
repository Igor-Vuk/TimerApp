/* @flow */

import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../client/routes.js'

async function render (component) {
  const content = ReactDOM.renderToString(component)
  return content
}

async function getMatchParams (routes, currentUrl) {
  return new Promise((resolve: (data: any) => void, reject: (error: any) => void) => {
    match({routes: routes, location: currentUrl}, (err, redirect, props) => {
      if (err) {
        return reject(err)
      }
      return resolve(props)
    })
  })
}

export default async(req, res, next) => {
  const renderProps = await getMatchParams(routes, req.url)
  if (renderProps) {
    const component = (
      <RouterContext {...renderProps} />
    )
    req.body = await render(component)
    next()
  }
}
