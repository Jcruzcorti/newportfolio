import React from 'react'
import { Link } from 'react-router-dom'
import ButtonHover from '../buttons/ButtonHover'
import './navbar.css'



function NavBar() {

  return (
    <div className="DivNavBar">
        
        <Link to='/Cv'><ButtonHover tittle="CV"/></Link>
        <ButtonHover tittle="PORTFOLIO"/>
        <ButtonHover tittle="ABOUT ME"/>
        <ButtonHover tittle="CONTACT"/>
    </div>
  )
}

export default NavBar