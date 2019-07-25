import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <div>
          <h5>Title</h5>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TextArea;
