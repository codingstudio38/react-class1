import React, { forwardRef } from 'react'
import './../App.css';
function NChild(props, ref) {
    return (
        <div>
            <h2>This is child</h2>
            <input type="text" ref={ref} />
        </div >
    );
}
export default forwardRef(NChild);
