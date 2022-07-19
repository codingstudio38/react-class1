import React,{useState} from 'react'
import './../App.css';
export default function Getinputvalue() {
const [inputvalue,setData]=useState(null);
const [printvalue,setPrint]=useState(false);
    function getdata(val){
        setData(val.target.value)
        setPrint(false)
    }

  return (
   <div className="User">
    <h2>Get Input value</h2>
    <input type="text" id="check" onChange={getdata}/>
    <p>{inputvalue}</p>
    {
        printvalue?<p>{inputvalue}</p>:null
    }
    <button onClick={()=>setPrint(true)}>Print Value</button>
   </div>
  );
}