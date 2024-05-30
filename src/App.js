import "../src/app.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import MyServices from "./component/MyServices";
import Testimonials from "./component/Testimonials";
import MySkills from "./component/MySkills";
import InterestingFacts from "./component/InterestingFacts";
import MyContent from "./component/MyContent";
import Contact from "./component/Contact";

function App() {
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
