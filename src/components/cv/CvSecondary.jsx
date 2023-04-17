import React from 'react'
import Opening from '../../imgs/apertura.svg'
import Html from '../../imgs/html.svg'
import Css from '../../imgs/css.svg'
import Js from '../../imgs/js.svg'
import Reactjs from '../../imgs/react.png'
import Clousing from '../../imgs/clausura.svg'



function CvSecondary() {
  return (
    <>
        <div className='DivCvSecondary'>          
            <h2>KNOWLEDGES</h2>
            <div className='DivKnowledge'> 
                <img src={Opening} alt="imgapertura" className='ImgKnowledges'/>     
                <img src={Html} alt="imghtml" className='ImgKnowledges'/> 
                <img src={Css} alt="imgcss" className='ImgKnowledges'/> 
                <img src={Js} alt="imgjs" className='ImgKnowledges'/> 
                <img src={Reactjs} alt="imgreact" className='ImgKnowledges'/> 
                <img src={Clousing} alt="imgclausura" className='ImgKnowledges'/>     
                
                <div className='DivSub'>
                    <div className='DivSub1'>
                        <h4 className='h4'>HTML</h4>
                        <h4 className='h4'>CSS</h4>
                        <h4 className='h4'>GIT</h4>
                        <h4 className='h4'>Github</h4>
                        <h4 className='h4'>Bootstrap</h4>
                        <h4 className='h4'>SCSS</h4>
                    </div>
                    <div className='DivSub2'>
                        <h4 className='h4'>JavaScript</h4>
                        <h4 className='h4'>React js</h4>
                        <h4 className='h4'>Next js</h4>
                        <h4 className='h4'>Firebase</h4>
                        <h4 className='h4'>Material UI</h4>
                        <h4 className='h4'>Tailwind</h4>
                    </div>
                </div>
            </div>
                <h2>LANGUAGES</h2>
                <div className='DivLenguages'>                   
                    <h4 className='h4'>Spanish: native</h4>
                    <h4 className='h4'>English: intermediate/advanced</h4>
                </div>          
        </div>
    </>
  )
}

export default CvSecondary