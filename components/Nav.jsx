import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBarContainer from '../containers/SearchBarContainer.jsx'

class Nav extends Component {
  render() {
    return (
      <div id="navigation-bar">
        <span className="navbar-toggle" id="js-navbar-toggle">
        <SearchBarContainer />
        </span>
        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav