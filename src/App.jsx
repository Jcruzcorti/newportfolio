import { useState } from 'react';
import './App.css';
import ButtonTheme from './components/buttons/ButtonTheme';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';



function App() {

  const [themeColor,setThemeColor] = useState(true)

  const handleChangeThemeColor = () =>{
    themeColor ? setThemeColor(false) : setThemeColor(true)
  }

  return (
    <div className={themeColor ? "AppPrimary" : "AppSecondary"}>
      
      <section className='SectionApp'>
        <div className='DivButtonTheme'>
          <ButtonTheme onClick={handleChangeThemeColor}/>
        </div>
        <Presentation/>
        <Presentation/>
        <Presentation/>
        <Presentation/>
        <Presentation/>
        <Presentation/>  
      </section>

      <footer className='FooterApp'>
        <Footer/>
      </footer>  
    </div>
  );
}

export default App;
