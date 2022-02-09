import "./App.css";
import AOS from "aos";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Work />
    </section>
  );
}

export default App;
