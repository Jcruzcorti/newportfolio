import React from 'react'
import './portfolio.css'


function PortfolioProyectItem({proyect}) {

  return (
    
    <div className='DivProyectos'>
        <a href={proyect.url} target='_blank' rel="noopener noreferrer">
            <div className='DivCard1'>
                <h2>{proyect.tittle}</h2>
                <div className='DivImgCard'>
                    <img src={proyect.img} alt='imgProyect' className='ImgCard'/>
                </div>                
                <div className='DivInfoCard'>
                    <h4 className='h4Card'>{proyect.description}</h4>     
                </div>                      
            </div>
        </a>
    </div>
  )
}

export default PortfolioProyectItem