import React from 'react'
import { NavLink } from 'react-router-dom'
import ButtonHover from '../buttons/ButtonHover'
import './navbar.css'


function NavBar() {


  return (
    <div className="DivNavBar">     
        <NavLink to='/cv'><ButtonHover tittle="CV"/></NavLink>
        <NavLink to='/portfolio'><ButtonHover tittle="PORTFOLIO"/></NavLink>
        <NavLink to='/sobremi'><ButtonHover tittle="ABOUT ME"/></NavLink>
        <NavLink to='/contacto'><ButtonHover tittle="CONTACT"/></NavLink>
    </div>
  )
}

export default NavBar