import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function User(){
    const [user,setUser]=useState({})
    const param=useParams();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8090/getUser/${param.id}`)
        .then(response=>{setUser(response.data)}).catch(error=>{document.write(error.message)})
    },[])

    return <>
    <h2>Id :{user.userId}</h2>
    <h2>Name :{user.name}</h2>
    <h2>Email :{user.email}</h2>
    <h2>Mobile :{user.mobile}</h2>
    <h2>Location :{user.location}</h2>
    </>
}