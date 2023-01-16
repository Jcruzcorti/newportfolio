import React from 'react'
import PortfolioProyectItem from './PortfolioProyectItem'

function PortfolioProyects({proyects}) {

  return (
    <>
        {proyects.map((proyect)=>(
            <PortfolioProyectItem key={proyect.id} proyect={proyect}/>        
        ))}
    </>
  )
}   

export default PortfolioProyects