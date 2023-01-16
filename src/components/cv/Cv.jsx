import React from 'react'
// import { Link } from 'react-router-dom'
import './cv.css'
import CvPrimary from './CvPrimary'
import CvSecondary from './CvSecondary'


function Cv() {

  return (

    <div className='DivCv' id='Cv'>
        <CvPrimary/>
        <CvSecondary/>
    </div>
  )
}

export default Cv