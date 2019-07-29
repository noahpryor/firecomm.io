import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <h4
        id="SectionItem"
        onClick={() => {
          this.props.changeSection();
          this.props.fillDocs();
          this.props.toggleSubSection();
        }}
      >
        {this.props.name}
      </h4>
    );
  }
}

export default Section;
