import React,{useEffect} from 'react'
import './presentation.css'
import imgCv from '../../imgs/fotocv.png'
import NavBar from '../navbar/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Presentation() {

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 400,
    });
  });



  return (

  <div className='DivPrimaryPresentation' data-aos="zoom-in">
    
    <div className='DivPresentation'>
      <div className='DivInformation'>    
          <h1>Hey there! I'm Juan Cruz Cortiñas</h1>
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