import React, {Component} from 'react'
export default class Newcomponent extends Component
{
    constructor()
    {
        super();
        this.state={
            data:"Vidyut"
        }
    }
    updatedata()
    {
        this.setState({data:"Bidyut"});
    }
    render()
    {
        return (
            <div>
                <h2>This is class component</h2>
                <h2>Use State in class component</h2>
                <p>{this.state.data}</p>
                 <button onClick={()=>this.updatedata()}>Update</button>
            </div>
        );
    }
}