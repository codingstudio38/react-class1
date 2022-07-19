import React, { Component } from 'react'
import Student from './Student';
import './../App.css';
class Willunmount extends Component {

    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    Toggel() {
        this.setState({ show: !this.state.show });
    }
    render() {

        return (
            <div className="User" >
                <h2>Component Will Unmount</h2>

                {
                    this.state.show ?
                        <Student /> :
                        <h2>Child component has been removed</h2>
                }
                <button onClick={() => this.Toggel()}>Toggle Child Conponent</button>
            </div >
        );
    }
}
export default Willunmount;