import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



class SubSection extends Component {
    
    render() {
        console.log(this.props.status, '////////////')

        const test1 = (name) => {
            return this.props.sections[name].map((val, i) => {
                return <h3 key={i} >{val}</h3>
            })
        }
        let test2 = test1(this.props.parentName);
        

        if(this.props.status){
            return(
                <div id='subSectionID' style={{color: 'blue'}}  >
                    {test2}
                </div>
            )
        } else {
            return null
        }
    
    }
}

export default SubSection