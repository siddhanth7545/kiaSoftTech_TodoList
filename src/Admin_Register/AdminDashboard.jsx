import React from 'react'

import AcademyManagerMainbar from '../AcademyManager/AcademyManagerMainbar'
import AcademyManagerSideBar from '../AcademyManager/AcademyManagerSideBar'
import  "./AdminDash.css"

const AdminDashboard = () => {
  return (
    <>
      <section >
        <article id='SideandMain'>
          <AcademyManagerSideBar/>
          <AcademyManagerMainbar/>
        </article>
      </section>
    </>
  )
}

export default AdminDashboard