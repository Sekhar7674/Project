import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [user,setUser]=useState({})
    const nagavate=useNavigate()
    const changeValue = event=>{
        const key=event.target.id;
        setUser({...user,[key]:event.target.value})
    }
    const formSubmit = event=>{
        event.preventDefault();
        axios.post("http://127.0.0.1:8090/loginUser",user).then(response=>{
            if(response.data!=0){
                nagavate(`/user/${response.data}`)
                setUser({})
            }
            else
            document.write("Invalid UserName Or Password")
        }).catch(error=>{document.write(error.message)})
    }

    return <>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <h2>Login</h2>
            <form onSubmit={formSubmit}>
            <div>
                    <label htmlFor="name" className="col-form-label">Name</label>
                    <input type="text" className="form-control" id="name" 
                    value={user.name||""} onChange={changeValue}/>
                </div>

                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" 
                    value={user.password||""} onChange={changeValue}/>
                </div>
                <br></br>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                    Create New Account<a href="/reg">Register</a>
                </div>
            </form>
            </div>
        </div>
    </>
}