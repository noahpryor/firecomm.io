import React from "react";
import { connect } from "react-redux";

import { toggleSidebar } from "../actions/actions";

const mapStateToProps = store => {
  return {
    section: store.docs.section
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())

  };
};

class HamburgerBar extends React.Component {
  render() {
    return (
      <section className="hamburger-flex">
        <button onClick={this.props.toggleSidebar}> ☰ </button>
        <h1>{this.props.section}</h1>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerBar);
