import React from "react";
import uniqid from 'uniqid';

const WorkSection = (props) => {

    const renderExp = (exp) => {
        return (
            <div key={uniqid()} style={{fontSize: "0.8em"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h4>{exp.what + ' - ' + exp.type}</h4>
                    <h4 style={{fontStyle: "italic"}}>{exp.sd + ' - ' + exp.ed}</h4>
                </div>
                <h4>{exp.desc}</h4>
            </div>
        )
    }

    return (
        <div>
            <h3>{props.title}</h3>
            {props.info.map(exp => renderExp(exp))}
        </div>
    )
}

// class WorkSection extends Component {

//     constructor(props) {
//         super();
        
//     }

//     renderExp(exp) {
//         return (
//             <div key={uniqid()} style={{fontSize: "0.8em"}}>
//                 <div style={{display: "flex", justifyContent: "space-between"}}>
//                     <h4>{exp.what + ' - ' + exp.type}</h4>
//                     <h4 style={{fontStyle: "italic"}}>{exp.sd + ' - ' + exp.ed}</h4>
//                 </div>
//                 <h4>{exp.desc}</h4>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <h3>{this.props.title}</h3>
//                 {this.props.info.map(exp => this.renderExp(exp))}
//             </div>
//         )
//     }
// }

export default WorkSection