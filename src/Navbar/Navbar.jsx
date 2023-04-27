import React from 'react'
import Logo from './Logo'
import Menu from "./Menu"
import Stylee from "./navbar.module.css"


const Navbar = () => {  
  return (
    <section id={Stylee.navbar}>
        <article> 
            <Logo/>
            <Menu/>
        </article>



    </section>
  )
}

export default Navbar