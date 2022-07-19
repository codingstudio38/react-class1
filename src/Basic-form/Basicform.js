import React, { useState } from 'react'
import './../App.css';
export default function Getinputvalue() {
    const [name, setName] = useState(null);
    const [tnc, setTnc] = useState(false);
    const [movies, setMovies] = useState(null);
    const [condition, setCondition] = useState(null);
    const [userid, setUserid] = useState(null);
    const [password, setPassword] = useState(null);
    const [useriderror, setUeriderror] = useState(null);
    function getFormData(e) {
        e.preventDefault()
        if (userid == null) {
            alert("Invalid user id"); return false;
        } else if (userid.length < 3) {
            alert("Invalid user id"); return false;
        }
        if (tnc == true) {
            setCondition("accepted");
        } else {
            setCondition("not accepted");
        }
        console.log({ 'userid': userid, 'password': password, 'name': name, 'movie': movies, 'tnv': condition });
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUeriderror("Invalid user id");
        } else {
            setUeriderror(null);
        }
        setUserid(item);
    }
    return (
        <div className="User">
            <h2>Basic Form </h2>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} /><b>{useriderror}</b><br />

                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /><br />

                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} /><br />

                <select onChange={(e) => setMovies(e.target.value)}>
                    <option value="0">Select</option>
                    <option value="Marvel">Marvel</option>
                    <option value="DC">DC</option>
                </select><br />

                <input type="checkbox" value="accepted" onClick={(e) => setTnc(e.target.checked)} /><br />

                <button type="submit" >Submit</button>
            </form>
        </div >
    );
}