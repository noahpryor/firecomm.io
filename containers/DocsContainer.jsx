import React, { Component } from "react";
import Section from "../components/Section.jsx";
import { connect } from "react-redux";

import HamburgerBar from "../components/HamburgerBar.jsx";
import SideBarContainer from "../containers/SideBarContainer.jsx";

const mapStateToProps = store => {
  return {
    section: store.docs.section
  };
};
class DocsContainer extends Component {
  render() {
    return (
      <section>
        <HamburgerBar section={this.props.section} />
        <SideBarContainer />
        <h4>Documentation</h4>
        <Section />
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(DocsContainer);
