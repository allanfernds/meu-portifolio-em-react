import About from "./components/About";
import Header from "./components/Header";
import Hero from './components/Hero'
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from './components/SkillsSection';
import Footer from "./components/Footer";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <Header />
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
