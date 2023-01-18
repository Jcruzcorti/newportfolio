import React from 'react'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';



function CvPrimary() {
  return (
    <>
        <div className='DivCvPrimary'>
            <h2>FORMACIÓN ACADÉMICA</h2>
            <div className='DivEducation'>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Bachiller orientado en economía y gestión de las organizaciones en Instituto Juan Zorrilla de San Martín 2008-2013</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Licenciatura en Psicología en Facultad de Psicología UNC. 2015 - Actualidad</h4>
                <a href='https://jcruzcorti.github.io/CV/img/certificadocoder-copia.png' target='_blank' rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>Curso de Desarrollo web en Coderhouse</h4></a>
                <a href='https://jcruzcorti.github.io/CV/img/js.png' target='_blank'rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>Curso de Javascript en Coderhouse</h4></a>
                <a href='https://jcruzcorti.github.io/CV/img/reactjs.png' target='_blank' rel="noopener noreferrer"><h4 className='h4'><ArrowDropDownSharpIcon/>Curso de React Js en Coderhouse</h4></a>
            </div>
            <h2>APTITUDES</h2>
            <div className='DivAptitudes'>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Resolución de problemas, buena comunicación, adaptabilidad, organización/orden</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Esfuerzo, constancia, positividad</h4>
                <h4 className='h4'><ArrowDropDownSharpIcon/>Proactividad, autodidacta, empatía, autonomía</h4>
            </div>
        </div>
    </>
  )
}

export default CvPrimary