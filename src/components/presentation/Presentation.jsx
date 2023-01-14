import React from 'react'
import './presentation.css'
import imgCv from '../../imgs/fotocv.png'


function Presentation() {
  return (
    <div className='DivPresentation'>

        <div className='DivInformation'>
            <h1>Hey there! I'm Juan Cruz Cortiñas</h1>
            <h2>Front-end Developer</h2>
        </div>
        <div className='DivInformation'>
            <img src={imgCv} alt="Imgcv" className='PhotoCv'/>
        </div>



    </div>
  )
}

export default Presentation;