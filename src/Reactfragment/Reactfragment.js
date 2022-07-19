import React, { Fragment, useState } from 'react'
import Child from './Child'
import './../App.css';
function Reactfragment() {
    const [auto, setAuto] = useState(0);
    function perendata(d) {
        alert(d);
        setAuto(d)
    }
    return (
        <Fragment>
            <div className="User">
                <h2>React Fragment/Send Data Child to Parent Component(Lifting state up)</h2>
                {auto}
                <Child getdata={perendata} />
            </div>
        </Fragment>
    );
}

export default Reactfragment; 