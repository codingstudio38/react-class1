import React, { useState, useEffect } from 'react'
import './../App.css';
import style from './../style.module.css';
import { Button, Alert } from 'react-bootstrap';
function UseEffect() {
    const [total, setTotal] = useState(0);
    const [data, setData] = useState(0);
    useEffect(() => {
        ///// console.log("useEffect");
    }, [total])
    function update() {
        setTotal(total + 1);
    }
    function updatedata() {
        setData(data + 1);
    }
    return (
        <div className="User">
            <h2>useEffect in React</h2>
            <h3>{total}</h3>
            <h3>{data}</h3>
            <Button variant="info" onClick={() => update()}>Update Total</Button><br /><br />
            <Button variant="info" onClick={() => updatedata()}>Update Data</Button>

            <h2>Stles in React</h2>

            <h2 className="testcss">Stles type 1 in React</h2>

            <h2 style={{ color: 'red', backgroundColor: 'black' }}>Stles type 2 in React</h2>

            <h2 className={style.testcss}>Stles type 3 in React</h2>

            <h2>bootstrap</h2>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            {
                <Alert variant="success">
                    This is a success alert—check it out!
                </Alert>
            }

        </div>
    );
}

export default UseEffect;