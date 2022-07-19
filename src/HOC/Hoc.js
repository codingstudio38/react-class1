import React, { useState } from 'react'
import './../App.css';
function Test() {
  return (
    <div className="User">
      <h2>High Order Conponent</h2>
      <HOCred cmp={Cpunter} />
      <HOCgreen cmp={Cpunter} />
    </div>
  );
}
function HOCred(props) {
  return (
    <div>
      <h3>Red Counter</h3>
      <div style={{ backgroundColor: 'red', width: 100 }}><props.cmp /></div>
    </div>
  )
}
function HOCgreen(props) {
  return (
    <div>
      <h3>Green Counter</h3>
      <div style={{ backgroundColor: 'green', width: 100 }}><props.cmp /></div>
    </div>
  )
}
function Cpunter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Test;