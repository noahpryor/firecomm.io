import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Box from '../components/Box.jsx';

class HeroContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/docs">Get Started</Link>
        <div className="Boxes">
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    );
  }
}

export default HeroContainer;
