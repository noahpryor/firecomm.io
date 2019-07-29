import React, { Component } from 'react';
<<<<<<< HEAD

// enable onclick on each section
    // set a value true


class Section extends Component {

    render() {
        return (
            <h1>{this.props.name}</h1>
            )
    }
}

export default Section
=======

class Section extends Component {
  render() {
    return (
      <h4
        id="SectionItem"
        onClick={() => {
          this.props.changeSection();
          this.props.fillDocs();
        }}
      >
        {this.props.name}
      </h4>
    );
  }
}

export default Section;
>>>>>>> 0ea50a11e0e0fe906f581ab9e504c1ee855349a5
