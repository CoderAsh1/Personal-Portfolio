import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Certification from "./components/Certification";
AOS.init();

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Certification />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
