/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'
import './index.local.scss'

class Navigation extends Component {
  render (): React.Element<any> {
    return (
      <div styleName="container">

        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" styleName="nav-bar">
          {/* hamburger menu on small screen size */}
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* navigation bar brend */}
          <a className="navbar-brand" href="#">ReactTimer</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <IndexLink to="/" className="nav-item nav-link">Timer</IndexLink>
              <Link to="/countdown" className="nav-item nav-link">Countdown</Link>
            </div>
            <div className="navbar-nav ml-auto">
              <span className="navbar-text" styleName="nav-text">Created by <a href="https://github.com/Igor-Vuk" target="_blank">Igor Vukelic</a></span>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navigation
