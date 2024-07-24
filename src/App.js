import Header from "./component/Header";
import Hero from "./component/Hero";
import About from './component/About';
import Technologies from './component/Technology';
import Projects from './component/Projects';
import Contact from './component/Contact';
function App() {
  return (
    <div className="overflow-x-hidden text-gray-300 selection:bg-gray-300 selection:text-black font-inter">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <Header />
      <div className="px-20 mb-10">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
