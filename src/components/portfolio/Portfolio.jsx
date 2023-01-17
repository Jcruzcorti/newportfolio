import React from 'react'
// import { Link } from 'react-router-dom'
import './portfolio.css'
import PortfolioProyects from '../portfolio/PortfolioProyects'
import {proyects} from '../../mock/Proyects.jsx'
import NavBar from '../navbar/NavBar'


function Portfolio() {

  return (
    <>
        <NavBar/>
        <div className='DivProyectos'>
            <h1>PROYECTOS</h1>
            <PortfolioProyects proyects={proyects}/>
        </div>
    </>
  )
}

export default Portfolio