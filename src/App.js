import "../src/app.css";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  return (
    <div className="App">
      <Home />
      <AnchorLink id="#About">
        <About />
      </AnchorLink>
      <AnchorLink id="#Portfolio">
        <Portfolio />
      </AnchorLink>
    </div>
  );
}

export default App;
