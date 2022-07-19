import React, { Component } from 'react'
import './../App.css';
class Student extends Component {

    constructor() {
        super();
    }
    componentWillUnmount() {
        alert("componentWillUnmount called");
    }
    render() {
        return (
            <div>
                <h2>Student Component</h2>
            </div >
        );
    }
}
export default Student;