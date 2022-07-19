import React, { useRef } from 'react'
import NChild from './NChild';
export default function Refinfunctionalcomponent() {
    let inputREF = useRef();
    // inputREF.current.value = 100;
    function change() {
        console.log(inputREF.current.value);
        inputREF.current.focus();
    }
    let inputchildRef = useRef();
    function changeChild() {
        inputchildRef.current.value = 1000;
        inputchildRef.current.focus();
        inputchildRef.current.style.color = "red";
    }
    return (
        <div className='User'>
            <h2>Ref in functional component react</h2>
            <input type="text" ref={inputREF} />
            <button onClick={() => change()}>Update</button>

            <h2>forwardRef in react</h2>
            <NChild ref={inputchildRef} />
            <button onClick={() => changeChild()}>Change Child Input</button>
        </div>
    );
}