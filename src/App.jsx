import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const App = ({ resumePage = false }) => {
  return (
    <>
      <div className="overflow-x-hidden antialiased text-dutch_white-700 selection:bg-pomp_and_power-400 selection:text-dutch_white-500">
        <div className="fixed top-0 -z-10 size-full">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000001_50%,#2f244d_95%)]" />
        </div>

        <div className="container mx-auto px-8">
          <div className="min-h-screen">
            <Navbar />
            {resumePage ? (
              <>
                <Helmet>
                  <title>Resume - jaredabw</title>
                </Helmet>
                <Resume />
              </>
            ) : (
              <>
                <Helmet>
                  <title>Home - jaredabw</title>
                </Helmet>

                <Hero />
              </>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
App.propTypes = {
  resumePage: PropTypes.bool, // default value is false
};

export default App;
