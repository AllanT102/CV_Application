
import React, { Component } from 'react';
import PersonalDetails from './PersonalDetailsForm'
import WorkExp from './WorkExpForm'
import EduForm from './EducationForm'
import '../styles/CVForm.css'

class CVForm extends Component {

    render() {
        return (
            <div className="form">
                <PersonalDetails />
                <WorkExp />
                <EduForm />
            </div>
        )
    }

}

export default CVForm