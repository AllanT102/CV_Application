import React, { Component } from "react";
import uniqid from "uniqid";
import '../styles/section.css'

class EducationForm extends Component {
  constructor() {
    super();
    this.state = {
      edus: [],
      edu: {
        cp: "Course / Program",
        place: "University",
        sd: "Start Date",
        ed: "End Date",
        desc: "Description",
        id: uniqid(),
      },
    };
    this.createNewEducation = this.createNewEducation.bind(this);
    this.renderNewEducation = this.renderNewEducation.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.updatePlace = this.updatePlace.bind(this);
    this.updateSd = this.updateSd.bind(this);
    this.updateEd = this.updateEd.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.deleteEdu = this.deleteEdu.bind(this);
  }

  createNewEducation(edu) {
    this.setState({
      edus: this.state.edus.concat(this.state.edu),
      edu: {
        cp: "Course / Program",
        place: "University",
        sd: "Start Date",
        ed: "End Date",
        desc: "Description",
        id: uniqid(),
      },
    });
  }

  renderNewEducation(edu) {
    return (
      <div key={edu.id}  className="section sec-form">
        <input type="text" defaultValue={edu.cp} onChange={(event) => this.updateCourse(edu, event)}></input>
        <input type="text" defaultValue={edu.place} onChange={(event) => this.updatePlace(edu, event)}></input>
        <input type="text" defaultValue={edu.sd} onChange={(event) => this.updateSd(edu, event)}></input>
        <input type="text" defaultValue={edu.ed} onChange={(event) => this.updateEd(edu, event)}></input>
        <input type="text" defaultValue={edu.desc} onChange={(event) => this.updateDesc(edu, event)}></input>
        <button type="submit" onClick={(event) => this.deleteEdu(edu)}> Delete </button>
      </div>
    );
  }

  updateCourse(edu, event) {
      this.setState({
          edus: this.state.edus.map(curr => {
              if (curr.id === edu.id) {
          return {...curr, cp: event.target.value}
        }
        return curr;
      })
    })
  }

  updatePlace(edu, event) {
    this.setState({
      edus: this.state.edus.map(curr => {
        if (curr.id === edu.id) return {...curr, place: event.target.value}
        return curr;
      })
    })
  }

  updateSd(edu, event) {
    this.setState({
      edus: this.state.edus.map(curr => {
        if (curr.id === edu.id) return {...curr, sd: event.target.value}
        return curr;
      })
    })
  }

  updateEd(edu, event) {
    this.setState({
      edus: this.state.edus.map(curr => {
        if (curr.id === edu.id) return {...curr, ed: event.target.value}
        return curr;
      })
    })
  }

  updateDesc(edu, event) {
    this.setState({
      edus: this.state.edus.map(curr => {
        if (curr.id === edu.id) return {...curr, desc: event.target.value}
        return curr;
      })
    })
  }

  deleteEdu(edu) {
    this.setState({
        edus: this.state.edus.filter(curr => curr.id !== edu.id),
      })
  }


  render() {
    return (
      <div>
        <h1>Education</h1>
        <button type="submit" onClick={this.createNewEducation} className="add">
          Add
        </button>
        {this.state.edus.map((edu) => this.renderNewEducation(edu))}
      </div>
    );
  }
}

export default EducationForm;