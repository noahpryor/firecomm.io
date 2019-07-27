import React, {Component} from 'react'

class Section extends Component {

    render() {
        return(
        <h5 onClick={this.props.changeSection}>
        {this.props.name}
        </h5>
        )  
    }
}

export default Section

