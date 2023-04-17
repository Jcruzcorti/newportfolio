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
            <h2>PRESENTATION</h2>
            <h4 className='h4'> I was born on March 14, 1996 in Córdoba, Argentina. I'm 27 years old and I'm studying a degree in Psychology at the Universidad Nacional de Córdoba and after having performed various work tasks in places such as a chocolate business, a greengrocer, a sports club and a pastry business, I became interested in this totally new world for me, such as programming. From this point, I always wanted to progress and internalize myself in this profession, training and learning more and more to constantly develop my technical skills in this area</h4>
          </div>
          <div className='DivInterests'>
            <div className='DivInterestsItems'>
              <h2>INTERESTS</h2>
              <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Playing sports (training, soccer, paddle, tennis)</h4>
              <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Enjoying time with family and friends</h4>
              <h4 className='h4'><img src={mate} alt='img mate' className='imgMate'/>Watching soccer/series/movies, playing video games</h4>
            </div>                      
        </div>
      </div>
    </>
  )
}

export default AboutMe