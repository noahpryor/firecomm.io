import React from "react";
import { connect } from "react-redux";

import { toggleSidebar } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  };
};

class HamburgerBar extends React.Component {
  render() {
    return (
      <section className="hamburger-flex">
        <button onClick={this.props.toggleSidebar}>Toggle me</button>
        <h1>{this.props.section}</h1>
      </section>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HamburgerBar);
