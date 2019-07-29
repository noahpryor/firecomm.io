import React, { Component } from 'react';
import Section from '../components/Section.jsx';
import { changeSection, fillDocs } from '../actions/actions';

import { connect } from 'react-redux';

const mapStateToProps = store => ({
  sidebarActive: store.docs.sidebarActive,
  mySections: store.docs.sections,
});

const mapDispatchToProps = dispatch => ({
  changeSection: sectionName => dispatch(changeSection(sectionName)),
  fillDocs: sectionName => dispatch(fillDocs(sectionName))

});

class SidebarContainer extends Component {
  componentDidUpdate() {
    console.log('sidebaractive:', this.props.sidebarActive);
  }
  render() {
    if (this.props.sidebarActive) {
      return (
        <section id="sidebar">
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
          
          {this.props.mySections.map((val, i) => <Section key={i} name={val} > </Section> )}

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
