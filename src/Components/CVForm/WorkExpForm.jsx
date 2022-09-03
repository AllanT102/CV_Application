import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExpForm extends Component {
  constructor() {
    super();
    this.state = {
      exps: [],
      exp: {
        company: "Company",
        position: "Position",
        sd: "Start Date",
        ed: "End Date",
        desc: "Description",
        id: uniqid(),
      },
    };
    this.createNewExperience = this.createNewExperience.bind(this);
    this.renderNewExperience = this.renderNewExperience.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateSd = this.updateSd.bind(this);
    this.updateEd = this.updateEd.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
  }

  createNewExperience(exp) {
    this.setState({
      exps: this.state.exps.concat(this.state.exp),
      exp: {
        company: "Company",
        position: "Position",
        sd: "Start Date",
        ed: "End Date",
        desc: "Description",
        id: uniqid(),
      },
    });
    console.log(this.state.exps)
  }

  updateCompany(exp, event) {
    this.setState({
      exps: this.state.exps.map(curr => {
        if (curr.id === exp.id) {
          return {...curr, company: event.target.value}
        }
        return curr;
      })
    })
    console.log(this.state.exps)
  }

  updatePosition(exp, event) {
    this.setState({
      exps: this.state.exps.map(curr => {
        if (curr.id === exp.id) return {...curr, position: event.target.value}
        return curr;
      })
    })
  }

  updateSd(exp, event) {
    this.setState({
      exps: this.state.exps.map(curr => {
        if (curr.id === exp.id) return {...curr, sd: event.target.value}
        return curr;
      })
    })
  }

  updateEd(exp, event) {
    this.setState({
      exps: this.state.exps.map(curr => {
        if (curr.id === exp.id) return {...curr, ed: event.target.value}
        return curr;
      })
    })
  }

  updateDesc(exp, event) {
    this.setState({
      exps: this.state.exps.map(curr => {
        if (curr.id === exp.id) return {...curr, desc: event.target.value}
        return curr;
      })
    })
  }

  renderNewExperience(exp) {
    return (
      <div key={exp.id}>
        <input type="text" defaultValue={exp.company} onChange={(event) => this.updateCompany(exp, event)}></input>
        <input type="text" defaultValue={exp.position} onChange={(event) => this.updatePosition(exp, event)}></input>
        <input type="text" defaultValue={exp.sd} onChange={(event) => this.updateSd(exp, event)}></input>
        <input type="text" defaultValue={exp.ed} onChange={(event) => this.updateEd(exp, event)}></input>
        <input type="text" defaultValue={exp.desc} onChange={(event) => this.updateDesc(exp, event)}></input>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        <button type="submit" onClick={this.createNewExperience}>
          Add
        </button>
        {this.state.exps.map((exp) => this.renderNewExperience(exp))}
      </div>
    );
  }
}

export default WorkExpForm;