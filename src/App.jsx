import React,{useState, useEffect} from 'react';
import './App.css';
import ButtonLinkHome from './components/buttons/ButtonLinkHome';
import ButtonTheme from './components/buttons/ButtonTheme';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';
import ContextProvider from './context/Context';
import {BrowserRouter, Routes, Route, Link, useLocation} from 'react-router-dom'
import Cv from './components/cv/Cv';
import Portfolio from './components/portfolio/Portfolio';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const [themeColor,setThemeColor] = useState(true)

  const handleChangeThemeColor = () =>{
    themeColor ? setThemeColor(false) : setThemeColor(true)
  }

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);


  
  return (
    <ContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className={themeColor ? "AppPrimary" : "AppSecondary"} >
        
          <section className='SectionApp' >
            <div className='DivButtonTheme'>
              <ButtonTheme onClick={handleChangeThemeColor}/>
            </div>
            <Routes>
              <Route path='/' element={<Presentation/>}/>
              <Route path='/cv' element={<Cv/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/sobremi' element={<AboutMe/>}/>
              <Route path='/contacto' element={<Contact/>}/>
            </Routes>
            <div className='ButtonLinkHome'>
              <Link to='/' onClick={() => window.scrollTo(0, 0)}><ButtonLinkHome/></Link>
            </div>
          </section>

          <footer className='FooterApp'>
            <Footer/>
          </footer>  
        </div>
      </BrowserRouter>
    </ContextProvider>
    
  );
}

export default App;
