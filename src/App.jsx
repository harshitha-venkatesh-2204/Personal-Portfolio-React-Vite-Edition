import styles from "./App.module.css";
import {Skills} from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {Projects} from "./components/Projects/Projects";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills/>
    </div>
  );
}

export default App;
