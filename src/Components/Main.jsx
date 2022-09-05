import React, { useState } from "react";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";
import CVPreview from "./CVPreview/CVPreview";
import "./styles/main.css";

const Main = (props) => {
  const [personal, setPersonal] = useState({
    name: "Name",
    position: "Position",
    number: "Phone Number",
    email: "Email",
    github: "Github",
  });
  const [exps, setExps] = useState({
    work: [],
    edu: []
  });
  const [exp, setExp] = useState({
    type: "",
    what: "",
    sd: "",
    ed: "",
    desc: "",
    id: uniqid(),
  })

  // type is either edu or work
  function updateField(event, exp, attribute, type) {
    let updatedValue = exps[type].map((curr) => {
      if (curr.id === exp.id) {
        return { ...curr, [attribute]: event.target.value };
      }
      return curr;
    })

    setExps({
      ...exps,
      [type]: updatedValue
    })
  }

  function updateType(event, exp, type) {
    if (type === "Education") updateField(event, exp, "type", "edu")
    else if (type === "Work Experience") updateField(event, exp, "type", "work")
  }

  function updateWhat(event, exp, type) {
    if (type === "Education") updateField(event, exp, "what", "edu")
    else if (type === "Work Experience") updateField(event, exp, "what", "work")
  }

  function updateSd(event, exp, type) {
    if (type === "Education") updateField(event, exp, "sd", "edu")
    else if (type === "Work Experience") updateField(event, exp, "sd", "work")
  }

  function updateEd(event, exp, type) {
    if (type === "Education") updateField(event, exp, "ed", "edu")
    else if (type === "Work Experience") updateField(event, exp, "ed", "work")
  }

  function updateDesc(event, exp, type) {
    if (type === "Education") updateField(event, exp, "desc", "edu")
    else if (type === "Work Experience") updateField(event, exp, "desc", "work")
  }

  function deleteExp(exp, type) {
    let updatedValue; 

    if (type === "Education") {
      updatedValue = exps.edu.filter((curr) => curr.id !== exp.id);
      setExps(exps => ({
        ...exps,
        edu: updatedValue
      }))
    } else if (type === "Work Experience") {
      updatedValue = exps.work.filter((curr) => curr.id !== exp.id);
      setExps(exps => ({
        ...exps,
        work: updatedValue
      }))
    }
  }

  function createNewSection(type) {
    if (type === "Education") {
      setExps({
        ...exps,
        edu: exps.edu.concat({
          type: "Course / Program",
          what: "University",
          sd: "Start Date",
          ed: "End Date",
          desc: "Description",
          id: uniqid(),
        })
      });
      setExp({
        type: "",
        what: "",
        sd: "",
        ed: "",
        desc: "",
        id: uniqid(),
      })
    } else if (type === "Work Experience") {
      setExps({
        ...exps,
        work: exps.work.concat({
          type: "Company",
          what: "Position",
          sd: "Start Date",
          ed: "End Date",
          desc: "Description",
          id: uniqid(),
        })
      });
      setExp({
        type: "",
        what: "",
        sd: "",
        ed: "",
        desc: "",
        id: uniqid(),
      })
    }
  }

  function updatePersonalInfo(value, attribute) {
    setPersonal({
      ...personal,
      [attribute]: value
    })
  }

  function updateName(value) {
    updatePersonalInfo(value, "name")
  }

  function updatePosition(value) {
    updatePersonalInfo(value, "position")
  }

  function updateNumber(value) {
     updatePersonalInfo(value, "number")
  }

  function updateEmail(value) {
    updatePersonalInfo(value, "email")
  }

  function updateGithub(value) {
    updatePersonalInfo(value, "github")
  }

  let parentState = {
    personal: personal,
    exps: exps,
    exp: exp
  }

  return (
    <div className="main">
      <CVForm
        info={parentState}
        functions={[
          updateType,
          updateWhat,
          updateSd,
          updateEd,
          updateDesc,
          deleteExp,
          createNewSection,
          updateName,
          updatePosition,
          updateNumber,
          updateEmail,
          updateGithub,
        ]}
      />
      <CVPreview info={parentState} />
    </div>
  );
};

// class Main extends Component {
//   constructor() {
//     super();
//     this.state = {
//       personal: {
//         name: "Name",
//         position: "Position",
//         number: "Phone Number",
//         email: "Email",
//         github: "Github",
//       },
//       exps: {
//         work: [],
//         edu: [],
//       },
//       exp: {
//         type: "",
//         what: "",
//         sd: "",
//         ed: "",
//         desc: "",
//         id: uniqid(),
//       },
//     };
//     this.createNewSection = this.createNewSection.bind(this);
//     this.updateType = this.updateType.bind(this);
//     this.updateWhat = this.updateWhat.bind(this);
//     this.updateSd = this.updateSd.bind(this);
//     this.updateEd = this.updateEd.bind(this);
//     this.updateDesc = this.updateDesc.bind(this);
//     this.deleteExp = this.deleteExp.bind(this);
//     this.updateName = this.updateName.bind(this);
//     this.updatePosition = this.updatePosition.bind(this);
//     this.updateNumber = this.updateNumber.bind(this);
//     this.updateEmail = this.updateEmail.bind(this);
//     this.updateGithub = this.updateGithub.bind(this);
//   }

//   updateType(event, exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, type: event.target.value };
//             }
//             return curr;
//           }),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, type: event.target.value };
//             }
//             return curr;
//           }),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   updateWhat(event, exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, what: event.target.value };
//             }
//             return curr;
//           }),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, what: event.target.value };
//             }
//             return curr;
//           }),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   updateSd(event, exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, sd: event.target.value };
//             }
//             return curr;
//           }),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, sd: event.target.value };
//             }
//             return curr;
//           }),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   updateEd(event, exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, ed: event.target.value };
//             }
//             return curr;
//           }),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, ed: event.target.value };
//             }
//             return curr;
//           }),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   updateDesc(event, exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, desc: event.target.value };
//             }
//             return curr;
//           }),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.map((curr) => {
//             if (curr.id === exp.id) {
//               return { ...curr, desc: event.target.value };
//             }
//             return curr;
//           }),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   deleteExp(exp, type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           edu: this.state.exps.edu.filter((curr) => curr.id !== exp.id),
//           work: this.state.exps.work,
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.filter((curr) => curr.id !== exp.id),
//           edu: this.state.exps.edu,
//         },
//       });
//     }
//   }

//   createNewSection(type) {
//     if (type === "Education") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work,
//           edu: this.state.exps.edu.concat({
//             type: "Course / Program",
//             what: "University",
//             sd: "Start Date",
//             ed: "End Date",
//             desc: "Description",
//             id: uniqid(),
//           }),
//         },
//         exp: {
//           type: "",
//           what: "",
//           sd: "",
//           ed: "",
//           desc: "",
//           id: uniqid(),
//         },
//       });
//     } else if (type === "Work Experience") {
//       this.setState({
//         exps: {
//           work: this.state.exps.work.concat({
//             type: "Company",
//             what: "Position",
//             sd: "Start Date",
//             ed: "End Date",
//             desc: "Description",
//             id: uniqid(),
//           }),
//           edu: this.state.exps.edu,
//         },
//         exp: {
//           type: "",
//           what: "",
//           sd: "",
//           ed: "",
//           desc: "",
//           id: uniqid(),
//         },
//       });
//     }
//   }

//   updateName(value) {
//     this.setState({
//       personal: {
//         ...this.state.personal,
//         name: value,
//       },
//     });
//   }

//   updatePosition(value) {
//     this.setState({
//       personal: {
//         ...this.state.personal,
//         position: value,
//       },
//     });
//   }personal: {
//         ...this.state.personal,
//         email: value,
//       },
//     });
//   }

//   updateGithub(value) {
//     this.setState({
//       personal: {
//         ...this.state.personal,
//         github: value,
//       },
//     });
//   }

//   render() {
//     return (
//       <div className="main">
//         <CVForm
//           info={this.state}
//           functions={[
//             this.updateType,
//             this.updateWhat,
//             this.updateSd,
//             this.updateEd,
//             this.updateDesc,
//             this.deleteExp,
//             this.createNewSection,
//             this.updateName,
//             this.updatePosition,
//             this.updateNumber,
//             this.updateEmail,
//             this.updateGithub,
//           ]}
//         />
//         <CVPreview info={this.state} />
//       </div>
//     );
//   }
// }

  // updateNumber(value) {
  //   this.setState({
  //     personal: {
  //       ...this.state.personal,
  //       number: value,
  //     },
  //   });
  // }

  // updateEmail(value) {
  //   this.setState({
      

export default Main;
