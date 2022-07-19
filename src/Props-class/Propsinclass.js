import React from 'react'
import './../App.css';
export default class Propsinclass extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name2: props.data
        }
    }
    updatedata() {
        this.setState({ name2: "Bidyut" });
    }
    render() {
        return (
            <div className="User">
                <h2>Use Props in Class component {this.props.data}</h2>
                <h2>Users {this.state.name2}</h2>
                <button onClick={() => this.updatedata()}>Update</button>
            </div>
        );
    }
}

