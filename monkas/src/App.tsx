import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import LandingPage from "./pages/LandingPage";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

const App: React.FC = () => {
  const { count } = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <SideBar />
    </>
  );
};

export default App;
