import React, { Component } from 'react'
export default class Constructorinclass extends Component {
    constructor(props) {
        super();
        this.state = {
            data: "Vidyut",
            name2: props.name
        }
    }

    render() {
        return (
            <div className="User">
                <h2>Constructor life cycle in class component</h2>
                <h3>{this.state.data}</h3>
                <h3>{this.state.name2}</h3>
            </div>
        );
    }
}