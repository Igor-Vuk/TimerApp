/* @flow */
/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'
import './index.local.scss'
import img from '../../../styles/img/profilna.jpg'
// import img2 from '../../../styles/img/time.png'
// import img3 from '../../../styles/img/treca.jpg'
// import img4 from '../../../styles/img/cetvrta.png'

class Navigation extends Component {
  render (): React.Element<any> {
    return (
      <div styleName="container">

        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded" styleName="nav-bar">
          {/* hamburger menu on small screen size  */}
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* navigation bar brend */}
          <a className="navbar-brand" href="#">ReactTimer</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" styleName="navLinks">
              <IndexLink to="/" className="nav-item nav-link">Timer</IndexLink>
              <Link to="/countdown" className="nav-item nav-link">Countdown</Link>
            </div>
            <div className="navbar-nav ml-auto">
              <span className="navbar-text ml-auto" styleName="nav-text">Created by <a href="https://github.com/Igor-Vuk" target="_blank">Igor Vukelic</a> <img src={img} styleName="profileImg" /></span>

              {/* <img src={img2} styleName="profileImg" />
              <img src={img3} styleName="profileImg" />
              <img src={img4} styleName="profileImg" /> */}
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navigation
