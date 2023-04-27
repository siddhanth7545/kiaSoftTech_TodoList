import React from 'react'
import Navbar from './Navbar/Navbar'
import  './Global.css'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Authentication/Login'
import Register from './Authentication/Register';
import Admin from './Admin_Register/Admin';
import Home from './Navbar/Home';
import AdminDashboard from './Admin_Register/AdminDashboard';
import AddAcademy from './AcademyManager/AddAcademy';


const App = () => {
  return (
    <div>
        <Router>
        <Navbar/>
          <Routes>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}>  
          <Route path="AddAcademy" element={<AddAcademy/>} /> 
          </Route>
            <Route path="/Home" element={<Home/>} />
            <Route path="/Admin" element={<Admin/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />


          </Routes>
        </Router>
    </div>
  )
}

export default App