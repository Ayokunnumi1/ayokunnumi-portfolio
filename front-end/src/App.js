import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import MyServices from "./component/MyServices";
import Testimonials from "./component/Testimonials";
import MySkills from "./component/MySkills";
import InterestingFacts from "./component/InterestingFacts";
import MyContent from "./component/myContent";
import Contact from "./component/Contact";
import "../src/app.css";

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setInitialLoading(false);
    }, 3000); 

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (initialLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-line"></div>
      </div>
    );
  }

  return (
    <div className="App overlayy">
      <BrowserRouter>
        <Home />
        <MyServices />
        <About />
        <Portfolio />
        <Testimonials />
        <MySkills />
        <InterestingFacts />
        <MyContent />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
