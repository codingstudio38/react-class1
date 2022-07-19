import React, { createRef, Component } from 'react'
export default class Refinreact extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
    }
    componentDidMount() {
        // console.log(this.inputRef.current.value = "1000");
    }
    getval() {
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color = "white";
        this.inputRef.current.style.backgroundColor = "red";
    }
    render() {
        return (
            <div className='User'>
                <h2>Ref in react</h2>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getval()}>Update</button>
            </div>
        );
    }
}