import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
    <div className="overflow-x-hidden antialiased selection:bg-pomp_and_power-400 selection:text-dutch_white-500">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24
      [background:radial-gradient(125%_125%_at_50%_10%,#70A0AF_10%,#706993_100%)]"/>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
      </div>
      
    </div>
    </>
  )
}

export default App