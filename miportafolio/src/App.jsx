import Header from "./components/Header";
import Skills from './components/Skills';
import About from "./components/About";
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header nombre="Mario Moussa" profesion="Estudiante de Tecnicatura en Programación UTN" />

      <Skills />

      <About />

      <Projects />

      <Footer texto="Mario Moussa - Estudiante de Programación UTN" email="mariomoussa@email.com" />
      
    </div>
  );
}

export default App;

