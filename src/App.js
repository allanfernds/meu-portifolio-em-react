import About from './components/About';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
// import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import Articles from './components/Articles';
import NavBar from './components/NavBar';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import ContactForm from './components/ContactForm';

function App () {
  return (
    <main className="bg-extendcolor01-0 flex flex-col justify-center items-center">
      <NavBar />
      <Hero />
      <About />
      <ProjectsSection />
      <MoreInfo />
      <Services />
      <Articles />
      <ContactForm />
      {/* <SkillsSection /> */}
      <Footer />
    </main>
  );
}

export default App;
