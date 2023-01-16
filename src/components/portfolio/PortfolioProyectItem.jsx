import React from 'react'
import { Link } from 'react-router-dom'


function PortfolioProyectItem({proyect}) {

  return (
    <div>
        <div className=''>
          {/* <a href={proyect.url} target='_blank' rel="noopener noreferrer"> */}
            <h2>{proyect.tittle}</h2>
            <h4>{proyect.description}</h4>
            <img src={proyect.img} alt='imgProyect'/>
          {/* </a> */}
        </div>
    </div>
  )
}

export default PortfolioProyectItem