import React from 'react'
import NavBar from '../navbar/NavBar'
import './cv.css'
import CvPrimary from './CvPrimary'
import CvSecondary from './CvSecondary'


function Cv() {

  return (
    <>  
        <NavBar/>
        <div className='DivCv' id='Cv'>           
            <CvPrimary/>
            <CvSecondary/>
        </div>
    </>
    
  )
}

export default Cv