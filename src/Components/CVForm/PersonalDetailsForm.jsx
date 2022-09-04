import React, { Component } from 'react';
import '../styles/section.css';

class PersonalDetailsForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "Name",
            position: "Position",
            number: "Phone Number",
            email: "Email",
            github: "Github",
        }
    }

    render() {
        const {name, position, number, email, github} = this.state;
        return (
            <div className="section">
                <h1>Personal Details</h1>
                <input type="text" defaultValue={name}/>
                <input type="text" defaultValue={position}/>
                <input type="text" defaultValue={number}/>
                <input type="text" defaultValue={email}/>
                <input type="text" defaultValue={github}/>
            </div>
        )
    }
}

export default PersonalDetailsForm