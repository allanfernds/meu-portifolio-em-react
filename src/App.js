import About from "./components/About";
import Hero from './components/Hero'
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from './components/SkillsSection';
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Articles />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
