import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration(){
    const [user,setUser]=useState({})
    const nagavate=useNavigate()
    const [errorMessage,setErrorMessage]=useState("")
    const changeValue = event=>{
        const key=event.target.name;
        setUser({...user,[key]:event.target.value})
    }
    const formSubmit = event=>{
        console.log(user)
        event.preventDefault();
        axios.post("http://127.0.0.1:8090/saveUser",user).then(response=>{
            console.log(response)
            nagavate("/log")
            setUser({})
        }).catch(error=>{setErrorMessage(error.message)})
    }
    return <>
    <div className="row">
            <div className="col-3">
            <h3>{errorMessage}</h3>
            </div>
            <div className="col-6" style={{backgroundColor:"pink"}}>
                <h2 className="text-center">Register</h2>
            <form onSubmit={formSubmit}>
                <table cellPadding={5} align="center">
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="name" className="col-form-label">Name</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" id="name" 
                                    value={user.name||""} onChange={changeValue} name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="email" className="col-form-label">Email address</label>
                            </th>
                            <td>
                                <input type="email" className="form-control" id="email" 
                                    value={user.email||""} onChange={changeValue} name="email"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="password" className="form-label">Password</label>
                            </th>
                            <td>
                                <input type="password" className="form-control" id="password" 
                                    value={user.password||""} onChange={changeValue} name="password"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="conformPassword" className="form-label">Conform Password</label>
                            </th>
                            <td>
                                <input type="Password" className="form-control" id="conformPassword" 
                                    value={user.conformPassword||""} onChange={changeValue} name="conformPassword"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="location" className="col-form-label">Location</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" id="location" 
                                    value={user.location||""} onChange={changeValue} name="location"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="mobile" className="col-form-label">Mobile</label>
                            </th>
                            <td>
                                <input type="number" className="form-control" id="mobile" 
                                    value={user.mobile||""} onChange={changeValue} name="mobile"/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                User Type
                            </th>
                            <td>
                                <input type="radio" id="seller" value={"true"} 
                                onChange={changeValue} name="userType"/>
                                <label htmlFor="seller">seller</label>&nbsp;
                                <input type="radio" value={"false"} id="customer"
                                onChange={changeValue} name="userType"/>
                                <label htmlFor="customer">Customer</label>
                            </td>
                        </tr>
                        <tr>
                            <th className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </th>
                            <td>
                                Already have an Account?   <a href="/log">Login</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    </>
}