import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" exact component={AboutMe} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
