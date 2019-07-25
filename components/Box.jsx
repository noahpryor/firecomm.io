import React, { Component } from 'react';
import TextArea from './TextArea.jsx';

class Box extends Component {
  render() {
    return (
      <div id="Box">
        <TextArea text="Text Area Box"/>
      </div>
    );
  }
}

export default Box;
