import About from "./components/About";
import Header from "./components/Header";
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
    </div>
  );
}

export default App;
