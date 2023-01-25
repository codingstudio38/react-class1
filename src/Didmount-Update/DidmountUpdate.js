import React, { Component } from 'react'
class DidmountUpdate extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        //console.log("constructor");
    }
    // shouldComponentUpdate() if return false then componentDidUpdate() not run;
    componentDidUpdate(preProps, preState, snapshot) {
        console.log("componentDidUpdate");
        //console.log(preState);
        // console.log(preState.name === this.state.name);
        if (preState.counter === this.state.counter) {
            alert("data already same.");
        }
    }
    shouldComponentUpdate() {
        //console.log("shouldComponentUpdate");
        if (this.state.counter < 5) {
            console.log("shouldComponentUpdate", this.state.counter);
            return true;
        } else {
            alert("Your time is over..");
            return false;
        }
    }
    render() {
        //console.log("render");
        return (
            <div className='User'>
                <h2>Component Didmount Update</h2>
                <h2>{this.state.counter}</h2>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Update Name</button>
            </div>
        );
    }
}

export default DidmountUpdate;