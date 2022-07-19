import React,{useState} from 'react'
import './../App.css';
export function Propscomponent(prop) {
    // console.log(prop);
    const [name,setName]=useState(prop.name)
    function updatename(v){
        setName(v);
    }
  return (
   <div className="User">
    <h2>Use Props in functional component {prop.name}</h2>
    <h2>Users {name}</h2>
    <button onClick={()=>updatename("Bidyut")}>Update</button>
   </div>
  );
}

// export default Propscomponent;