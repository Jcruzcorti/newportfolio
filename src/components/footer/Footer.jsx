import React from 'react'
import './footer.css'
import instagramImg from '../../imgs/instagram.png'
import mailImg from '../../imgs/mail.png'
import githubImg from '../../imgs/github.png'
import linkedinImg from '../../imgs/linkedin.png'



function Footer() {

  return (
    <div className='DivFooter'>
        <a href="https://www.instagram.com/juancortinas/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer">
            <p className='PFooter'>@juancortinas</p>
            <img src={instagramImg} alt='instagram img' className='ImgFooter'/>
        </a>
        <a href="https://outlook.live.com/mail/0/"
            target="_blank"
            rel="noopener noreferrer">
            <p className='PFooter'>juancruzcor@hotmail.com</p>
            <img src={mailImg} alt='instagram img' className='ImgFooter'/>
        </a>
        <a href="https://github.com/Jcruzcorti"
            target="_blank"
            rel="noopener noreferrer">
            <p className='PFooter'>jcruzcorti</p>
            <img src={githubImg} alt='instagram img' className='ImgFooter'/>
        </a>
        <a href="https://www.linkedin.com/in/juan-cruz-corti%C3%B1as/"
            target="_blank"
            rel="noopener noreferrer">
            <p className='PFooter'>juan cruz</p>
            <img src={linkedinImg} alt='instagram img' className='ImgFooter'/>
        </a>
    </div>
  )
}

export default Footer