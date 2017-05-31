/* @flow */

import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../client/routes.js'

async function render (req, component) {
  const content = ReactDOM.renderToString(component)
  console.log("CTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", req)
  console.log("COM", component)
  return content
}

async function getMatchParams (routes, currentUrl) {
 /* console.log(routes)*/
  return new Promise((resolve: (data: any) => void, reject: (error: any) => void) => {
    match({routes: routes, location: currentUrl}, (err, redirect, props) => {
      if (err) {
        /*console.log("Err", err)*/
        return reject(err)
      }
     /* console.log("Props", props)*/
      return resolve(props)
    })
  })
}

export default async(req, res, next) => {
  /*console.log(req.url)*/
  const renderProps = await getMatchParams(routes, req.url)
  /*console.log(renderProps)*/
  if (renderProps) {
    const component = (
      <RouterContext {...renderProps} />
    )
    req.body = await render(req, component)
    next()
  }
}
