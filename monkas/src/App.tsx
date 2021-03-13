import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import LandingPage from "./pages/LandingPage";

function About() {
  return <h2>About</h2>;
}

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <SideBar />
    </>
  );
};

export default App;
