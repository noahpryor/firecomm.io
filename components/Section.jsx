import React, { Component } from 'react';
import { connect } from "react-redux";

// enable onclick on each section
    // set a value true

const mapStateToProps = store => ({
    collapsed: store.docs.collapsed,
    sections: store.docs.sections
});

// const mapDispatchToProps = dispatch => ({
//     toggleSubSections: (sectionName) => dispatch(toggleSubSections(sectionName))
// });

class Section extends Component {
   
    render() {

        console.log('renderingCOMPS')

        if(this.props.collapsed[this.props.name]){
            let result = this.props.sections[this.props.name].map((val, i) => {
                return <h3 key={i} >{val}</h3>
            })
            return ( <div>
                        <h1 id="SectionItem" onClick={ () => this.props.toggleSubSections() } > {this.props.name} </h1>
                        {result}
                    </div>
                    )
        } 
        else {
            return <h1 id="SectionItem" onClick={ () => this.props.toggleSubSections() } > {this.props.name} </h1>
        }

   
    }
}

export default connect(
    mapStateToProps,
    null
  )(Section);
