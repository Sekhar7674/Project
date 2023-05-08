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
            if(response.data!==0){
                nagavate(`/user/${response.data}`)
                setUser({})
            }
            else
            document.write("Invalid UserName Or Password")
        }).catch(error=>{document.write(error.message)})
    }

    return <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6" style={{backgroundColor:"pink"}}>
                <h2 className="text-center">Login</h2>
            <form onSubmit={formSubmit}>
                <table cellPadding={5} align="center">
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="name" className="col-form-label">Name</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" id="name" 
                                    value={user.name||""} onChange={changeValue}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="password" className="form-label">Password</label>
                            </th>
                            <td>
                                <input type="password" className="form-control" id="password" 
                                    value={user.password||""} onChange={changeValue}/>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </th>
                            <td>
                                Don't have an Account?  <a href="/reg">Register</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </div>
    </>
}