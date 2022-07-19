import React, { useState, useEffect } from 'react';
import './../App.css';
import Previousprops from './Previousprops';
function Previousstate() {
  const [conut, setCount] = useState(1);
  const [newconut, setNewconut] = useState(1);
  function update() {
    let data = Math.floor(Math.random() * 10);
    setCount((pre) => {
      console.log(pre);
      return data;
    })
  }
  function updateprops() {
    let data = Math.floor(Math.random() * 10);
    setNewconut(data)
  }
  const [newdata, setNewdata] = useState({ name: "vidyut", age: 23 });

  return (
    <div className="User">
      <h2>This is Previous state</h2>
      <h2>{conut}</h2>
      <button onClick={() => update()}>update</button>
      <Previousprops count={newconut} />
      <button onClick={() => updateprops()}>update props</button>
      <h2>State Object with Hooks</h2>
      <h3>Name {newdata.name}</h3>
      <h3>Age {newdata.age}</h3>
      <input type="text" placeholder="Name" value={newdata.name} onChange={(e) => { setNewdata({ ...newdata, name: e.target.value }) }} /><br />
      <input type="text" placeholder="Age" value={newdata.age} onChange={(e) => { setNewdata({ ...newdata, age: e.target.value }) }} /><br />

    </div>
  );
}

export default Previousstate;