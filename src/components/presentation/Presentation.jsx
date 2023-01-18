import React from 'react'
import './presentation.css'
import imgCv from '../../imgs/fotocv.png'
import NavBar from '../navbar/NavBar';


function Presentation() {
  return (

  <div className='DivPrimaryPresentation'>
    
    <div className='DivPresentation'>
      <div className='DivInformation'>    
          <h1>Hola! Soy Juan Cruz Cortiñas</h1>
          <h2>Front-end Developer</h2>
      </div>
      <div className='DivInformation'>
          <img src={imgCv} alt="Imgcv" className='PhotoCv'/>
      </div>     
    </div>
    
    <NavBar/>
  </div>


    
  )
}

export default Presentation;