import React, { Component } from 'react'
class Didmount extends Component {
    constructor() {
        super();
        this.state = {
            name: "Vidyut"
        }
        //console.log("constructor");
    }
    componentDidMount() {
        //console.log("componentDidMount");
    }
    render() {
        // console.log("render");
        return (
            <div className='User'>
                <h2>Component Didmount</h2>
                <button onClick={() => this.setState({ name: "Bidyut" })}>Update Name</button>
            </div>
        );
    }
}

export default Didmount;