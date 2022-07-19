import {useState} from 'react'
import './../App.css';
export function Users() {
  const [data,setData]=useState(0)
  // var data = "vidyut";
  function updatedata(){
    // data = "Bidyut";
   setData(data+1);
  }
  function Apple(){
    return (
      <div>
        <h2>Apple component</h2>
      </div>
    );
  }
  return (
   <div className="User">
    <h2>This is functional component</h2>
    <h2>Use State in functionsl component</h2>
    <h2>Users {data}</h2>
    <button onClick={updatedata}>Update</button>
      <button onClick={()=>alert("Hello ..")}>Click</button>
    <Apple/>
   </div>
  );
}

// export default Users;