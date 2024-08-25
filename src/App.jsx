import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import {Skills} from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {Publications} from "./components/Publications/Publications";
import { Certifications } from "./components/Certifications/Certifications";
import {Projects} from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills/>
      <Experience />
      <Certifications/>
      <Publications/>
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
