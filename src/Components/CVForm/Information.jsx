import React from "react";
import '../styles/section.css'

const Information = (props) => {

  const renderNewSection = (exp) => {
    const {info, functions, title, f1, f2, f3, f4, f5 } = props;

    return (
      <div key={exp.id} className="section sec-form">
        <input type="text" defaultValue={f1} onChange={(event) => functions[0](event, exp, props.title)}></input>
        <input type="text" defaultValue={f2} onChange={(event) => functions[1](event, exp, props.title)}></input>
        <input type="text" defaultValue={f3} onChange={(event) => functions[2](event, exp, props.title)}></input>
        <input type="text" defaultValue={f4} onChange={(event) => functions[3](event, exp, props.title)}></input>
        <input type="text" defaultValue={f5} onChange={(event) => functions[4](event, exp, props.title)}></input>
        <button type="submit" onClick={() => props.functions[5](exp, title)}> Delete </button>
      </div>
    );
  }

  const renderProperInfo = () => {
    if (props.title === "Education") return props.info.exps.edu.map((exp) => renderNewSection(exp));
    else if (props.title === "Work Experience") return props.info.exps.work.map((exp) => renderNewSection(exp));
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <button type="submit" onClick={() => props.functions[6](props.title)} className="add">
        Add
      </button>
      {renderProperInfo()}
    </div>
  );
}

// class Information extends Component {
//   constructor(props) {
//     super(props);
//     this.renderNewSection = this.renderNewSection.bind(this);
//     this.renderProperInfo = this.renderProperInfo.bind(this);
//   }

//   renderNewSection(exp) {
//     const {info, functions, title, f1, f2, f3, f4, f5 } = this.props;

//     return (
//       <div key={exp.id} className="section sec-form">
//         <input type="text" defaultValue={f1} onChange={(event) => functions[0](event, exp, this.props.title)}></input>
//         <input type="text" defaultValue={f2} onChange={(event) => functions[1](event, exp, this.props.title)}></input>
//         <input type="text" defaultValue={f3} onChange={(event) => functions[2](event, exp, this.props.title)}></input>
//         <input type="text" defaultValue={f4} onChange={(event) => functions[3](event, exp, this.props.title)}></input>
//         <input type="text" defaultValue={f5} onChange={(event) => functions[4](event, exp, this.props.title)}></input>
//         <button type="submit" onClick={() => this.props.functions[5](exp, title)}> Delete </button>
//       </div>
//     );
//   }

//   renderProperInfo() {
//     if (this.props.title === "Education") return this.props.info.exps.edu.map((exp) => this.renderNewSection(exp));
//     else if (this.props.title === "Work Experience") return this.props.info.exps.work.map((exp) => this.renderNewSection(exp));
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button type="submit" onClick={() => this.props.functions[6](this.props.title)} className="add">
//           Add
//         </button>
//         {this.renderProperInfo()}
//       </div>
//     );
//   }
// }

export default Information;

// need to make exps and edus, also defaultvalue inside is weird