import React from "react";
import "./footer.css";
import instagramImg from "../../assets/instagram.png";
import mailImg from "../../assets/mail.png";
import githubImg from "../../assets/github.png";
import linkedinImg from "../../assets/linkedin.png";

function Footer() {
  return (
    <div className="DivFooter">
      <a href="https://www.instagram.com/juancortinas/?hl=es-la" target="_blank" rel="noopener noreferrer">
        <p className="PFooter">@juancortinas</p>
        <img src={instagramImg} alt="instagram img" className="ImgFooter" />
      </a>
      <a href="mailto:jcruzcorti@gmail.com">
        <p className="PFooter">jcruzcorti@gmail.com</p>
        <img src={mailImg} alt="email img" className="ImgFooter" />
      </a>
      <a href="https://github.com/Jcruzcorti" target="_blank" rel="noopener noreferrer">
        <p className="PFooter">jcruzcorti</p>
        <img src={githubImg} alt="github img" className="ImgFooter" />
      </a>
      <a href="https://www.linkedin.com/in/juancruzcortinas/" target="_blank" rel="noopener noreferrer">
        <p className="PFooter">juan cruz</p>
        <img src={linkedinImg} alt="linkedin img" className="ImgFooter" />
      </a>
    </div>
  );
}

export default Footer;
