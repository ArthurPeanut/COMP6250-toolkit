import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { HomePage } from './pages/HomePage'
import { TipPage } from "./pages/TipPage";
import { FormPage } from './pages/FormPage';
import { ResultPage } from "./pages/ResultPage";
import './App.css'

const Links = [
  { url: '/', label: 'Home' },
  { url: '/tips', label: 'Tips' },
  { url: '/forms', label: 'Forms' },
];

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar links={Links} />
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/tips">
              <TipPage />
            </Route>
            <Route path="/forms">
              <FormPage />
            </Route>
            <Route>
              <ResultPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;