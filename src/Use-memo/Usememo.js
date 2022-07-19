import React, { useState, useMemo } from 'react'
import './../App.css';
export default function Usememo() {
    const [countdata, setCountdata] = useState(0);
    const [item, setItem] = useState(10);
    const multicountMemo = useMemo(function multicount() {
        //console.log("multicount");
        return countdata * 5;
    }, [countdata]);

    function Update() {
        setCountdata(countdata + 1);
    }
    function Updatedata() {
        setItem(item * 2);
    }
    return (
        <div className="User">
            <h2>Usememo in React</h2>
            <h2>Count: {countdata}</h2>
            <h2>Data: {item}</h2>
            <h2>Function return: {multicountMemo}</h2>
            <button onClick={() => Update()}>Update Count</button>
            <button onClick={() => Updatedata()}>Update Data</button>
        </div>
    );
}
