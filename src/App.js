import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";

function App() {
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
