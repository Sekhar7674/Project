import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';
import User from './Components/User';
function App() {
  
  return <>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/reg" element={<Registration/>} />
    <Route path="/log" element={<Login/>} />
    <Route path='/user/:id' element={<User/>}/>
  </Routes>
  </>
}

export default App;
