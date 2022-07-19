import React, { Fragment, useEffect, useRef } from 'react';
import './../App.css';
function Previousprops(props) {
    const lastVal = useRef();
    useEffect(() => {
        lastVal.current = props.count;
    })
    const preval = lastVal.current;
    return (
        <Fragment>
            <h2>This is Previous Props</h2>
            <h2>Last props {preval}</h2>
            <h2>New Props {props.count}</h2>
        </Fragment>
    );
}

export default Previousprops;