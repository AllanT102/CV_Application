
import React from 'react';
import PersonalDetails from './PersonalDetailsForm'
import Information from './Information'
import '../styles/CVForm.css'

const CVForm = (props) => {
    return (
        <div className="form" style={{marginRight: "2%"}}>
            <PersonalDetails info={props.info} functions={props.functions}/>
            <Information info={props.info} functions={props.functions} title="Work Experience" f1="Company" f2="Position" f3="Starting Date" f4="End Date" f5="Description"/>
            <Information info={props.info} functions={props.functions} title="Education" f1="Course / Program" f2="University" f3="Starting Date" f4="End Date" f5="Description"/>
        </div>
    )
}

// class CVForm extends Component {

//     render() {
//         return (
//             <div className="form" style={{marginRight: "2%"}}>
//                 <PersonalDetails info={this.props.info} functions={this.props.functions}/>
//                 <Information info={this.props.info} functions={this.props.functions} title="Work Experience" f1="Company" f2="Position" f3="Starting Date" f4="End Date" f5="Description"/>
//                 <Information info={this.props.info} functions={this.props.functions} title="Education" f1="Course / Program" f2="University" f3="Starting Date" f4="End Date" f5="Description"/>
//             </div>
//         )
//     }

// }

export default CVForm