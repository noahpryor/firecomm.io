import React, { Component } from "react";
import Section from '../components/Section.jsx'
import {changeSection} from '../actions/actions'

import { connect } from "react-redux";

const mapStateToProps = store => ({
    sidebarActive: store.docs.sidebarActive
  })

const mapDispatchToProps = (dispatch) => ({
  changeSection: (sectionName) => dispatch(changeSection(sectionName))
})


class SidebarContainer extends Component {
  componentDidUpdate() {
    console.log("sidebaractive:", this.props.sidebarActive);
  }
  render() {
    if (this.props.sidebarActive) {
      return (
        <section id="sidebar" >
        <Section name=" introduction" changeSection={() => this.props.changeSection('introduction')} />
        <Section name="basic" onClick={() => alert('basic')} changeSection={() => this.props.changeSection('basic')}/>
        <Section name="advanced" onClick={() => alert('advanced')} changeSection={() => this.props.changeSection('advanced')}/>
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
