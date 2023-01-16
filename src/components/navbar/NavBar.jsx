import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import { Context } from '../../context/Context'
import ButtonHover from '../buttons/ButtonHover'
import './navbar.css'



function NavBar() {

  // const {themeColor,handleChangeThemeColor} = useContext(Context)

  return (
    <div className="DivNavBar">
      {/* {
        themeColor
        ?null
        :<Link to='/'><ButtonHover tittle="HOME"/></Link>
      } */}
        
        <NavLink to='/cv'><ButtonHover tittle="CV"/></NavLink>
        <NavLink to='/portfolio'><ButtonHover tittle="PORTFOLIO"/></NavLink>
        <ButtonHover tittle="SOBRE MI"/>
        <ButtonHover tittle="CONTACTO"/>
    </div>
  )
}

export default NavBar