import './App.css';
import ButtonTheme from './components/buttons/ButtonTheme';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';



function App() {


  return (
    <div className="App">
      
      <section className='SectionApp'>
        <div className='DivButtonTheme'>
          <ButtonTheme/>
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
