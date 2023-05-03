import { useState,useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState()


  useEffect(()=>{
    axios.get("http://127.0.0.1:8090/getUsers")
    .then(response=>{
      setData(response.data)
      setStatus(response.status)
    })
  }, [])

  return <>
  
  <h2>Status: {status}</h2>
    <ul>
      {
        data.map(user=> <li>
          {user.name}<br></br>
          {user.email}
        </li>)
      }
    </ul>
 
  </>
}

export default App;
