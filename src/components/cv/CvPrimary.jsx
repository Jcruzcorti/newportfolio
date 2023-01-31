import React from 'react'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';



function CvPrimary() {
  return (
    <>
        <div className='DivCvPrimary'>
            <h2>ACADEMIC BACKGROUND</h2>
            <div className='DivEducation'>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Bachelor's degree oriented in economics and management of organizations in the Institute Juan Zorrilla de San Martín 2008-2013</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Bachelor's Degree in Psychology at the Faculty of Psychology UNC. 2015 - Present</h4>
                <a href='https://jcruzcorti.github.io/CV/img/certificadocoder-copia.png' target='_blank' rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>Web development course at Coderhouse</h4></a>
                <a href='https://jcruzcorti.github.io/CV/img/js.png' target='_blank'rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>Javascript course at Coderhouse</h4></a>
                <a href='https://jcruzcorti.github.io/CV/img/reactjs.png' target='_blank' rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>React js course at Coderhouse</h4></a>
            </div>
            <h2>APTITUDES</h2>
            <div className='DivAptitudes'>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Problem-solving, good communication skills, adaptability, organization/orderly</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Effort, constancy, positivity</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Proactivity, self-thaught, empathy, autonomy</h4>
            </div>
        </div>
    </>
  )
}

export default CvPrimary