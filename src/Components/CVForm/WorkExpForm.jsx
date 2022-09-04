import React, { Component } from "react";
import uniqid from "uniqid";
import '../styles/section.css'

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
    this.deleteExp = this.deleteExp.bind(this);
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

  deleteExp(exp) {
    this.setState({
        exps: this.state.exps.filter(curr => curr.id !== exp.id),
      })
  }

  renderNewExperience(exp) {
    return (
      <div key={exp.id} className="section sec-form">
        <input type="text" defaultValue={exp.company} onChange={(event) => this.updateCompany(exp, event)}></input>
        <input type="text" defaultValue={exp.position} onChange={(event) => this.updatePosition(exp, event)}></input>
        <input type="text" defaultValue={exp.sd} onChange={(event) => this.updateSd(exp, event)}></input>
        <input type="text" defaultValue={exp.ed} onChange={(event) => this.updateEd(exp, event)}></input>
        <input type="text" defaultValue={exp.desc} onChange={(event) => this.updateDesc(exp, event)}></input>
        <button type="submit" onClick={(event) => this.deleteExp(exp)}> Delete </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        <button type="submit" onClick={this.createNewExperience} className="add">
          Add
        </button>
        {this.state.exps.map((exp) => this.renderNewExperience(exp))}
      </div>
    );
  }
}

export default WorkExpForm;