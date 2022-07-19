import React from 'react'
function Child(props) {
    const data = "Vidyut from child";
    return (
        <>
            <h2>This Child Component</h2>
            <h3> </h3>
            <button onClick={() => props.getdata(data)}>Click</button>
        </>
    );
}
export default Child; 