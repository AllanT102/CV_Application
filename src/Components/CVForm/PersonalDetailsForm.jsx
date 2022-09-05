import React from 'react';
import '../styles/section.css';

const PersonalDetailsForm = (props) => {
    
    const {name, position, number, email, github} = props.info.personal;

    return (
        <div className="section">
            <h1>Personal Details</h1>
            <input type="text" onChange={(event) => props.functions[7](event.target.value)} defaultValue={name}/>
            <input type="text" onChange={(event) => props.functions[8](event.target.value)} defaultValue={position}/>
            <input type="text" onChange={(event) => props.functions[9](event.target.value)} defaultValue={number}/>
            <input type="text" onChange={(event) => props.functions[10](event.target.value)} defaultValue={email}/>
            <input type="text" onChange={(event) => props.functions[11](event.target.value)} defaultValue={github}/>
        </div>
    )
    
}

// class PersonalDetailsForm extends Component {
//     constructor(props) {
//         super();
//     }


//     render() {
//         const {name, position, number, email, github} = this.props.info.personal;
//         return (
//             <div className="section">
//                 <h1>Personal Details</h1>
//                 <input type="text" onChange={(event) => this.props.functions[7](event.target.value)} defaultValue={name}/>
//                 <input type="text" onChange={(event) => this.props.functions[8](event.target.value)} defaultValue={position}/>
//                 <input type="text" onChange={(event) => this.props.functions[9](event.target.value)} defaultValue={number}/>
//                 <input type="text" onChange={(event) => this.props.functions[10](event.target.value)} defaultValue={email}/>
//                 <input type="text" onChange={(event) => this.props.functions[11](event.target.value)} defaultValue={github}/>
//             </div>
//         )
//     }
// }

export default PersonalDetailsForm