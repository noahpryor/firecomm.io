import React, { Component } from 'react';

// enable onclick on each section
    // set a value true


class Section extends Component {

    render() {
        return (
            <div>
                <h1 id="SectionItem" onClick={ () => this.props.addSection(this.props.name) } >{this.props.name}</h1>
                <subSection></subSection>
            </div>
            )
    }
}

export default Section
