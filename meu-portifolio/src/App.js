import About from "./components/About";
import Header from "./components/Header";
import Hero from './components/Hero'
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from './components/SkillsSection';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
