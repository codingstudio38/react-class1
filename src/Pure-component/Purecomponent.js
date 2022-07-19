import React, { PureComponent } from 'react'
export default class Purecomponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    update() {
        if (this.state.count < 5) {
            this.setState({ count: this.state.count + 1 })
        }
    }
    render() {
        // console.log("check rerendering");
        return (
            <div className='User'>
                <h2>This is Pure component</h2>
                <p>{this.state.count}</p>
                <button onClick={() => this.update()}>Update</button>
            </div>
        );
    }
}