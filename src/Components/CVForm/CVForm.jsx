
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetailsForm'
import WorkExp from './WorkExpForm'

class CVForm extends Component {

    render() {
        return (
            <div>
                <PersonalDetails />
                <WorkExp />
            </div>
        )
    }
}

export default CVForm