import React, { useState } from 'react'
import './../App.css';
function Hooks() {
  const [data, setData] = useState("This is hook");
  function update() {
    setData("Hii vidyut");
    setTimeout(() => {
      setData("Time over vidyut");
    }, 2000)
  }
  return (
    <div className="User">
      <h2>Hooks in React</h2>
      <h2>{data}</h2>
      <button onClick={() => update()}>Update</button>
    </div>
  );
}

export default Hooks;