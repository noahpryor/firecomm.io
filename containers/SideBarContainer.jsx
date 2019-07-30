import React, { Component } from 'react';
import Section from '../components/Section.jsx';
import { changeSection, fillDocs, toggleSubSections } from '../actions/actions';

import { connect } from "react-redux";

const mapStateToProps = store => ({
  sidebarActive: store.docs.sidebarActive,
  sections: store.docs.sections,
  collapsed: store.docs.collapsed,

});

const mapDispatchToProps = dispatch => ({
  changeSection: sectionName => dispatch(changeSection(sectionName)),
  fillDocs: sectionName => dispatch(fillDocs(sectionName)),
  toggleSubSections: sectionName => dispatch(toggleSubSections(sectionName))

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
        toggleSubSections={() => this.props.toggleSubSections(val)}
        subSectionStatus={false}
        sections={this.props.sections}
        status={true}
        >
      </Section>
    ))

      if (this.props.sidebarActive) {
        return (
          <section id="sidebar">
            {sectionArr}
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
