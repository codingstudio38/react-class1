import React, { useState, useRef } from 'react'
import './../App.css';
function Controllercomponent() {
  let [data, setData] = useState(100);
  let inputRef1 = useRef();
  let inputRef2 = useRef();
  function check(e) {
    e.preventDefault()
    // console.log(inputRef1.current.value);
    // console.log(inputRef2.current.value);
  }
  return (
    <div className="User">
      <h2>This is Controller/Uncontroller component</h2>
      <h3>This is Controller component</h3>

      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />

      <h3>This is Uncontroller component</h3>
      <form onSubmit={check}>
        <input type="text" ref={inputRef1} /><br /><br />
        <input type="text" ref={inputRef2} /><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Controllercomponent;