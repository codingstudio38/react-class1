import React,{useState} from 'react'
import './../App.css';
export default function Getinputvalue() {
const [status,setStatus]=useState(true)

  return (
   <div className="User">
    <h2>Hide and Show</h2>
    {
       status?<h2>Hello World</h2> :null
    }
    <button onClick={()=>setStatus(false)}>Hide</button>
    <button onClick={()=>setStatus(true)}>Show</button>
    <button onClick={()=>setStatus(!status)}>Toggel</button>
   </div>
  );
}