import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  collapsed: store.docs.subSectionCollapsedObj,
});

const mapDispatchToProps = dispatch => ({
  changeSection: sectionName => dispatch(changeSection(sectionName)),
  fillDocs: sectionName => dispatch(fillDocs(sectionName))
});

class Section extends Component {
  render() {
    // check if obj has propery of section name, if it does, load extra subsections
    if(this.collapsed.hasOwnProperty(this.props.name)){
      
      // load subsections
      return (
        <h4
          id="SectionItem"
          onClick={() => {
            this.props.changeSection();
            this.props.fillDocs();
          }}
        >
          {this.props.name + '  CLICKED'}
        </h4>
      );
    }
    // else
    else {
      return (
        <h4
          id="SectionItem"
          onClick={() => {
            this.props.changeSection();
            this.props.fillDocs();
          }}
        >
          {this.props.name}
        </h4>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);