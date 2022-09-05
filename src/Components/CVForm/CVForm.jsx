
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetailsForm'
import Information from './Information'
import '../styles/CVForm.css'

class CVForm extends Component {

    render() {
        return (
            <div className="form">
                <PersonalDetails info={this.props.info} functions={this.props.functions}/>
                <Information info={this.props.info} functions={this.props.functions} title="Work Experience" f1="Company" f2="Position" f3="Starting Date" f4="End Date" f5="Description"/>
                <Information info={this.props.info} functions={this.props.functions} title="Education" f1="Course / Program" f2="University" f3="Starting Date" f4="End Date" f5="Description"/>
            </div>
        )
    }

}

export default CVForm