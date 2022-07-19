import React from 'react';
import './../App.css';
export default function FunctionPass(props) {
    return (
        <div className="User">
            <h2 style={{ color: "green" }}>Pass function as Props</h2>
            <button onClick={() => props.data("click from child")}>Call data funnction</button>
        </div >
    );
}

// export default Users;