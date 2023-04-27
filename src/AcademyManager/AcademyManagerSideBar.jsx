import React from 'react'
import "./Academy.css"
import { Link } from 'react-router-dom';
import  "./Academy.css"

const AcademyManagerSideBar = () => {
  return (
    <>
    <section>
        <article id='sidebar'>
    <h1>AcademyManagerSideBar</h1><br />
    <div>
        <ol>
            <li><Link to="/AdminDashboard/AddAcademy">Add Academy</Link></li>
            <li><Link to="/Addname">Add name</Link></li>
            <li><Link to="/AddSchool">Add School</Link></li>
        </ol>
    </div>
    </article>
    </section>
    
    </>
  )
}

export default AcademyManagerSideBar