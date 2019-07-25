import React, { Component } from "react";

import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    sidebarActive: store.docs.sidebarActive
  };
};

class SidebarContainer extends Component {
  componentDidUpdate() {
    console.log("sidebaractive:", this.props.sidebarActive);
  }
  render() {
    if (this.props.sidebarActive) {
      return (
        <section id="sidebar">
          <h1>This is a Sidebar component</h1>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  null
)(SidebarContainer);
