import React from 'react'
import Stylee from "./navbar.module.css"
import {Link,useNavigate} from 'react-router-dom'

import AdminDashboard from '../Admin_Register/AdminDashboard'

const Menu = () => {
  let navigate=useNavigate()
  let token=localStorage.getItem("token");
  let role=localStorage.getItem("role")
  let handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    navigate("/Login")
  }
  return (
    <section id={Stylee.menulist}>
      <article>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            {token?null:<Link to="/Login">Login</Link>}
          </li>
          <li>
            {token?null:<Link to="/Register">Register</Link>}
            
          </li>
          {role==="ROLE_ADMIN"?<li><Link to="/AdminDashboard">Admin_Dashboard</Link></li>:null}
          <li onClick={handleLogout}>{token?<Link to="/Logout">Logout</Link>:null}</li>
        </ul>
      </article>
    </section>
  )
}

export default Menu