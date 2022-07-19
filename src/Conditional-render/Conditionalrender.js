import React,{useState} from 'react'
import './../App.css';
function Profiler() {
const [loggedin,setLoggedin]=useState(2);

  return (
   <div className="User">
    <h2>Conditional rendering If else condition</h2>
    {
        loggedin==1?
        <h2>Hello Vidyut 1</h2>
        :loggedin==2?
        <h2>Hello Vidyut 2</h2>
        :<h2>Hello Guest</h2>
    }
   </div>
  );
}
export default Profiler;