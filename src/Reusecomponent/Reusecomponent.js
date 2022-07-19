import React from 'react'
import './../App.css';
export function Reusecomponent(props) {

    return (
        <div>
            <span key={props.id}>User {props.data}</span>
        </div>
    );
}

