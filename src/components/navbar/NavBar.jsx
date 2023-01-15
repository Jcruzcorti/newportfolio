import React from 'react'
import ButtonHover from '../buttons/ButtonHover'
import './navbar.css'



function NavBar() {

  return (
    <div className="DivNavBar">
        <ButtonHover tittle="CV"/>
        <ButtonHover tittle="PORTFOLIO"/>
        <ButtonHover tittle="ABOUT ME"/>
        <ButtonHover tittle="CONTACT"/>
    </div>
  )
}

export default NavBar