import Header from "./components/Header";
import Skills from './components/Skills';
import About from "./components/About";

function App() {
  return (
    <div>
      <Header nombre="Mario Moussa" profesion="Estudiante de Tecnicatura en Programación UTN" />

      <Skills />

      <About />
      
    </div>
  );
}

export default App;

