import About from "./components/About";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden antialiased text-dutch_white-700 selection:bg-pomp_and_power-400 selection:text-dutch_white-500">
        <div className="fixed top-0 -z-10 size-full">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24
        [background:radial-gradient(125%_125%_at_50%_10%,#70A0AF_10%,#706993_90%)]"/>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experiences />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App