import React, { Component } from 'react';
import Section from '../components/Section.jsx';
import { changeSection, fillDocs, addSubSection } from '../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = store => ({
  sidebarActive: store.docs.sidebarActive,
  mySections: store.docs.sections,
});

const mapDispatchToProps = dispatch => ({
  changeSection: sectionName => dispatch(changeSection(sectionName)),
  fillDocs: sectionName => dispatch(fillDocs(sectionName)),
  addSection: sectionName => dispatch(addSubSection(sectionName))

});

class SidebarContainer extends Component {
  componentDidUpdate() {
    console.log('sidebaractive:', this.props.sidebarActive);
  }

  render() {

    let allSections = this.props.mySections.map((val, i) => <Section key={i} name={val} addSection={this.props.addSection} /> );

    console.log(allSections)
    if (this.props.sidebarActive) {
      return (
        <section id="sidebar">
          {allSections}
          {/* <Section
            name="introduction"
            changeSection={() => this.props.changeSection('introduction')}
            fillDocs={() => this.props.fillDocs('introduction')}
          />
          <Section
            name="basic"
            onClick={() => alert('basic')}
            changeSection={() => this.props.changeSection('basic')}
            fillDocs={() => this.props.fillDocs('basic')}
          />
          <Section
            name="advanced"
            onClick={() => alert('advanced')}
            changeSection={() => this.props.changeSection('advanced')}
            fillDocs={() => this.props.fillDocs('advanced')}
          /> */}
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
