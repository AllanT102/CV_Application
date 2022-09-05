import React, { Component } from "react";
import '../styles/section.css'

class Information extends Component {
  constructor(props) {
    super(props);
    this.renderNewSection = this.renderNewSection.bind(this);
    this.renderProperInfo = this.renderProperInfo.bind(this);
  }

  renderNewSection(exp) {
    return (
      <div key={exp.id} className="section sec-form">
        <input type="text" defaultValue={exp.type} onChange={(event) => this.props.functions[0](event, exp, this.props.title)}></input>
        <input type="text" defaultValue={exp.what} onChange={(event) => this.props.functions[1](event, exp, this.props.title)}></input>
        <input type="text" defaultValue={exp.sd} onChange={(event) => this.props.functions[2](event, exp, this.props.title)}></input>
        <input type="text" defaultValue={exp.ed} onChange={(event) => this.props.functions[3](event, exp, this.props.title)}></input>
        <input type="text" defaultValue={exp.desc} onChange={(event) => this.props.functions[4](event, exp, this.props.title)}></input>
        <button type="submit" onClick={() => this.props.functions[5](exp, this.props.title)}> Delete </button>
      </div>
    );
  }

  renderProperInfo() {
    if (this.props.title === "Education") return this.props.info.exps.edu.map((exp) => this.renderNewSection(exp));
    else if (this.props.title === "Work Experience") return this.props.info.exps.work.map((exp) => this.renderNewSection(exp));
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button type="submit" onClick={() => this.props.functions[6](this.props.title)} className="add">
          Add
        </button>
        {this.renderProperInfo()}
      </div>
    );
  }
}

export default Information;

// need to make exps and edus, also defaultvalue inside is weird