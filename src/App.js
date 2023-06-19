import Header from "./components/Header";
import Herosection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/ContactMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import CodeProfile from "./components/CodeProfileSection";
import "./index.css";

function App() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Header />
      <Herosection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodeProfile />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
