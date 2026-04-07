import Hero from "./components/hero";
import Nav from "./components/nav";
import Stats from "./components/stats";
import Projects from "./components/projects";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Stats/>
      <Projects/>
      <Skills/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;