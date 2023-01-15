// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Presentation from './components/presentation/Presentation';



function App() {


  return (
    <div className="App">
      
      <section className='SectionApp'>
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
