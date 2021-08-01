import React from "react";
import { Link } from "react-router-dom";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Login from "../Component/Auth/LogIn/LogIn";
import Registration from "../Component/Auth/Registration/Registration";
import Header from '../Component/Layout/Header/Header'
import SingleHome from "../Component/Home/SingleHome/SingleHome";


import Home1 from "../Component/Home/Home1";
import Footer from "../Component/Layout/Footer/Footer";

export default function Routes() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home1}></Route>
          <Route path="/LogIn" component={Login}></Route>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/me/:id" component={SingleHome} />
       
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
