import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <main>
        <h2>Here I am</h2>
        <Fade top>
          <p>I'm also here</p>
        </Fade>
        <Link to="/about">
          <button>click on me</button>
        </Link>
      </main>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">
          <button>click on me</button>
        </Link>
      </nav>
    </>
  );
}

export default App;
