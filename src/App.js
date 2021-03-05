import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchPage from "./pages/search/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
