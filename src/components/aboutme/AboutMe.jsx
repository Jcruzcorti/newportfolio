import React from 'react'
import './aboutme.css'
import mate from '../../imgs/mate.png'
import NavBar from '../navbar/NavBar'



function AboutMe() {

  return (

      <>
        <NavBar/>
        <div className='DivAboutMe'>
            <div className='DivAboutMePresentation'>
              <h2>PRESENTACIÓN</h2>
              <h4 className='h4'> Soy de nacionalidad Argentina, más precisamente de Córdoba Capital, tengo 26 años y nací el 14/03/1996. Curso la carrera de Licenciatura en Psicología en la Universidad Nacional de Córdoba, y luego de haber realizado distintas tareas laborales tanto en lugares como un emprendimiento de chocolatería, una verdulería, un club deportivo y un emprendimiento de pastelería, comencé a interesarme por este mundo totalmente nuevo para mí, como es el de la programación. A partir de este punto, siempre quise progresar e interiorizarme en ésta profesión, capacitándome y aprendiendo cada vez más para lograr desarrollar constantemente mis habilidades técnicas en este rubro.</h4>
            </div>
            <div className='DivInterests'>
              <div className='DivInterestsItems'>
                <h2>Intereses</h2>
                <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Practicar deportes (Entrenamiento, fútbol, padel, tenis)</h4>
                <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Disfrutar del tiempo con la familia y amigos</h4>
                <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Ver fútbol/series/películas, jugar videojuegos</h4>
              </div>                      
          </div>
        </div>
      </>
  )
}

export default AboutMe