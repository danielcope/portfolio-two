import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <section className="App">
      <Nav />
      <Home />
      <AboutMe />
    </section>
  );
}

export default App;
