import Header from "./components/Header";
import Skills from './components/Skills';
import About from "./components/About";

function App() {
  return (
    <div>
      <Header nombre="Mario" profesion="Estudiante de Programación" />

      <Skills />

      <About />
      
    </div>
  );
}

export default App;

