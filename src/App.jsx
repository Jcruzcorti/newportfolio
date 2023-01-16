import React,{useState} from 'react';
import './App.css';
import ButtonLinkHome from './components/buttons/ButtonLinkHome';
import ButtonTheme from './components/buttons/ButtonTheme';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';
import ContextProvider from './context/Context';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Cv from './components/cv/Cv';
import Portfolio from './components/portfolio/Portfolio';



function App() {

  const [themeColor,setThemeColor] = useState(true)

  const handleChangeThemeColor = () =>{
    themeColor ? setThemeColor(false) : setThemeColor(true)
  }

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className={themeColor ? "AppPrimary" : "AppSecondary"}>
        
          <section className='SectionApp'>
            <div className='DivButtonTheme'>
              <ButtonTheme onClick={handleChangeThemeColor}/>
            </div>
            <Routes>
              <Route path='/' element={<Presentation/>}/>
              <Route path='/cv' element={<Cv/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>

            <div className='ButtonLinkHome'>
              <Link to='/'><ButtonLinkHome/></Link>
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
