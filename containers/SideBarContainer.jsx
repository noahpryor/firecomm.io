import React, { Component } from "react";
import Section from "../components/Section.jsx";
import { changeSection, fillDocs, toggleSubSection } from "../actions/actions";

import { connect } from "react-redux";

const mapStateToProps = store => ({
  sidebarActive: store.docs.sidebarActive,
  sections: store.docs.sections,
  subSectionsActive: store.docs.subSectionsActive
});

const mapDispatchToProps = dispatch => ({
  changeSection: sectionName => dispatch(changeSection(sectionName)),
  fillDocs: sectionName => dispatch(fillDocs(sectionName)),
  toggleSubSection: sectionName => dispatch(toggleSubSection(sectionName))
});

class SidebarContainer extends Component {
  componentDidUpdate() {
    console.log("sidebaractive:", this.props.sidebarActive);
  }
  render() {
    const sectionArr = Object.keys(this.props.sections).map((val, i) => (
      <Section
        key={i}
        name={val}
        changeSection={() => this.props.changeSection(val)}
        fillDocs={() => this.props.fillDocs(val)}
        toggleSubSection={() => this.props.toggleSubSection(val)}
      />
    ));
    if (this.props.sidebarActive || this.props.subSectionsActive) {
      const subsectionArr = sectionArr.map((val, i) => {
        <Section
          key={i}
          name={val}
          changeSection={() => this.props.changeSection(val)}
        />;
      });

      return (
        <section id="sidebar">
          {sectionArr}
          <section id="subSectionsBar">{subsectionArr}</section>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
