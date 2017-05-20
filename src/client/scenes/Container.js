/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React from 'react'
import Navigation from 'Navigation'

const Container = ({children}: {children: Object}): React.Element<any> => {
  return (
    <div>
      <Navigation />
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 col-lg-3">
          { children }
        </div>
      </div>
    </div>
  )
}

export default Container
