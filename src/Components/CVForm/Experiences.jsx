import React, {Component} from "react";

class Experiences extends Component {

    constructor(props) {
        super(props);
        this.renderExp = this.renderExp.bind(this);
    }

    renderExp(exp) {
        
    }

    render() {
        return (
            <div>
                {this.props.exps.forEach(exp => this.renderExp(exp))};
            </div>
        )
    }
}