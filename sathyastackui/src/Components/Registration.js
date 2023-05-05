import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration(){
    const [user,setUser]=useState({})
    const nagavate=useNavigate()
    const changeValue = event=>{
        const key=event.target.id;
        setUser({...user,[key]:event.target.value})
    }
    const formSubmit = event=>{
        event.preventDefault();
        axios.post("http://127.0.0.1:8090/saveUser",user).then(response=>{
            console.log(response)
            nagavate("/log")
            setUser({})
        }).catch(error=>{document.write(error.message)})
    }
    return <>
    <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                <h2>Register</h2>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="name" className="col-form-label">Name</label>
                    <input type="text" className="form-control" id="name" 
                    value={user.name||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="email" className="col-form-label">Email address</label>
                    <input type="email" className="form-control" id="email" 
                    value={user.email||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" 
                    value={user.password||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="conformPassword" className="form-label">Conform Password</label>
                    <input type="Password" className="form-control" id="conformPassword" 
                    value={user.conformPassword||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="location" className="col-form-label">Location</label>
                    <input type="text" className="form-control" id="location" 
                    value={user.location||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="mobile" className="col-form-label">Mobile</label>
                    <input type="number" className="form-control" id="mobile" 
                    value={user.mobile||""} onChange={changeValue}/>
                </div>
                <div>
                    <label htmlFor="userType" className="col-form-label">User Type</label>&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="userType" value={"true"} 
                    onChange={changeValue} name="userType"/>Seller&nbsp;&nbsp;&nbsp;
                    <input type="radio" value={"false"} 
                    onChange={changeValue} name="userType"/>Customer
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    Sign In If You Have Already Account<a href="/log">Login</a>
                </div>
            </form>
            </div>
        </div>
    </>
}