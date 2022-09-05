import React from "react";
import Links from './Links'

const Header = (props) => {
    const { name, position, number, email, github } = props.personal;

        return (
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid black 2px"}}>
                <div style={{alignItems:"center", justifyContent: "center"}}>
                    <h1 style={{margin: 0}}>{name}</h1>
                    <h3 style={{margin: 0}}>{position}</h3>
                </div>
                <Links number={number} email={email} github={github} />
            </div>
        )
}

// class Header extends Component {

//     constructor(props) {
//         super()
//     }

//     render() {
//         const { name, position, number, email, github } = this.props.personal;

//         return (
//             <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "solid black 2px"}}>
//                 <div style={{alignItems:"center", justifyContent: "center"}}>
//                     <h1 style={{margin: 0}}>{name}</h1>
//                     <h3 style={{margin: 0}}>{position}</h3>
//                 </div>
//                 <Links number={number} email={email} github={github} />
//             </div>
//         )
//     }
// }

export default Header