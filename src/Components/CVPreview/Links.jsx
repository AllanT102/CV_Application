import React, { Component } from "react";

class Links extends Component {

    constructor(props) {
        super()
    }

    render() {
        return(
            <div>
                <ul style={{alignItems: "center", textAlign: "right"}}>
                    <ol style={{padding: "2px 0"}}>{this.props.number}</ol>
                    <ol style={{padding: "2px 0"}}>{this.props.email}</ol>
                    <ol style={{padding: "2px 0"}}>{this.props.github}</ol>
                </ul>
            </div>
        )
    }
}

export default Links