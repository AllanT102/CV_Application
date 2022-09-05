import React, { Component } from "react";
import uniqid from "uniqid";
import CVForm from "./CVForm/CVForm";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        name: "Name",
        position: "Position",
        number: "Phone Number",
        email: "Email",
        github: "Github",
      },
      exps: {
        work:[],
        edu:[],
      },
      exp: {
        type: "",
        what: "",
        sd: "",
        ed: "",
        desc: "",
        id: uniqid(),
      },
    };
    this.createNewSection = this.createNewSection.bind(this);
    this.updateType = this.updateType.bind(this);
    this.updateWhat = this.updateWhat.bind(this);
    this.updateSd = this.updateSd.bind(this);
    this.updateEd = this.updateEd.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.deleteExp = this.deleteExp.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateGithub = this.updateGithub.bind(this);
  }

  updateType(event, exp, type) {
    console.log(this.state.exps.edu)
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, type: event.target.value};
            }
            return curr;
          }),
          work: this.state.exps.work
        }
      })
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, type: event.target.value};
            }
            return curr;
          }),
          edu: this.state.exps.edu,
        }
      })
    }
  }

  updateWhat(exp, event, type) {
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, what: event.target.value};
            }
            return curr;
          }),
          work: this.state.exps.work
        }
      })
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, what: event.target.value};
            }
            return curr;
          }),
          edu: this.state.exps.edu,
        }
      })
    }
  }

  updateSd(exp, event, type) {
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, sd: event.target.value};
            }
            return curr;
          }),
          work: this.state.exps.work
        }
      })
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, sd: event.target.value};
            }
            return curr;
          }),
          edu: this.state.exps.edu,
        }
      })
    }
  }

  updateEd(exp, event, type) {
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, ed: event.target.value};
            }
            return curr;
          }),
          work: this.state.exps.work
        }
      })
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, ed: event.target.value};
            }
            return curr;
          }),
          edu: this.state.exps.edu,
        }
      })
    }
  }

  updateDesc(exp, event, type) {
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, desc: event.target.value};
            }
            return curr;
          }),
          work: this.state.exps.work
        }
      })
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.map(curr => {
            if (curr.id === exp.id) {
              return {...curr, desc: event.target.value};
            }
            return curr;
          }),
          edu: this.state.exps.edu,
        }
      })
    }
  }

  deleteExp(exp, type) {
    if (type === "Education") {
      this.setState({
        exps: {
          edu: this.state.exps.edu.filter((curr) => curr.id !== exp.id),
          work: this.state.exps.work
        }
      });
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.filter((curr) => curr.id !== exp.id),
          edu: this.state.exps.edu
        }
      });
    }
  }

  createNewSection(type) {
    if (type === "Education") {
      this.setState({
        exps: {
          work: this.state.exps.work, edu: this.state.exps.edu.concat(this.state.exp)
        },
        exp: {
          type: "",
          what: "",
          sd: "",
          ed: "",
          desc: "",
          id: uniqid(),
        },
      });
    } else if (type === "Work Experience") {
      this.setState({
        exps: {
          work: this.state.exps.work.concat(this.state.exp), edu: this.state.exps.edu
        },
        exp: {
          type: "",
          what: "",
          sd: "",
          ed: "",
          desc: "",
          id: uniqid(),
        },
      });
    }
  }

  updateName(value) {
    console.log(this.state.personal)
    this.setState({
      personal: {
        ...this.state.personal, name: value
      }
    })
  }

  updatePosition(value) {
    this.setState({
      personal: {
        ...this.state.personal, position: value
      }
    })
  }

  updateNumber(value) {
    this.setState({
      personal: {
        ...this.state.personal, number: value
      }
    })
  }

  updateEmail(value) {
    this.setState({
      personal: {
        ...this.state.personal, email: value
      }
    })
  }

  updateGithub(value) {
    this.setState({
      personal: {
        ...this.state.personal, github: value
      }
    })
  }

  render() {
    return (
      <CVForm
        info={this.state}
        functions={[
          this.updateType,
          this.updateWhat,
          this.updateSd,
          this.updateEd,
          this.updateDesc,
          this.deleteExp,
          this.createNewSection,
          this.updateName,
          this.updatePosition,
          this.updateNumber,
          this.updateEmail,
          this.updateGithub,
        ]}
      />
    );
  }
}

export default Main;