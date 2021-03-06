import React, { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useOnClickOutside } from "./hooks";
import logo from "./images/raccoon-image-1.png";
import "./App.css";

function App() {
  const node = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="A spinning raccoon" />
        <h1>Hi, I'm Michael Cai :)</h1>
        <p>I'm still working on this. I am trying to learn React and Github Workflows/Pages! Come back later!</p>
      </header>
    </div>
  );
}

function Resume() {
  return <h1>I have a diploma. I swear</h1>;
}

function Contact() {
  return <h2>If you ask really nicely maybe we can talk</h2>;
}

export default App;
