import React from "react";

const Links = (props) => {
    return(
        <div>
            <ul style={{alignItems: "center", textAlign: "right"}}>
                <ol style={{padding: "2px 0"}}>{props.number}</ol>
                <ol style={{padding: "2px 0"}}>{props.email}</ol>
                <ol style={{padding: "2px 0"}}>{props.github}</ol>
            </ul>
        </div>
    )
}

// class Links extends Component {

//     constructor(props) {
//         super()
//     }

//     render() {
//         return(
//             <div>
//                 <ul style={{alignItems: "center", textAlign: "right"}}>
//                     <ol style={{padding: "2px 0"}}>{this.props.number}</ol>
//                     <ol style={{padding: "2px 0"}}>{this.props.email}</ol>
//                     <ol style={{padding: "2px 0"}}>{this.props.github}</ol>
//                 </ul>
//             </div>
//         )
//     }
// }

export default Links