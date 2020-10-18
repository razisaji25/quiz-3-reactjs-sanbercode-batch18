
import React,{useState} from "react";


const Login =() => {

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const onChangeUsername=(e)=>{
        const value = e.target.value
        setUsername(value)
    }   

    const onChangePassword=(e)=>{
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div className="kotak3">
            <h1>LOGIN</h1>
            <div className="">
                <label>User Name</label><br/>
                <input type="text" placeholder="user Name" className="form-control" value={username} onChange={onChangeUsername}/>
            </div>
            <br/>
            <div className="">
                <label>Pasword</label><br/>
                <input type="text" placeholder="pasword" className="form-control" value={password} onChange={onChangePassword}/>
            </div>
            <br/>
            <br/>
            <button className="btn">Submit</button>
        </div>

        );
    }

export default Login;