/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";


// core components
import Student from "layouts/Student.js";
import Home from "pages/Home/index.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Suspense fallback={null}>
  <Router history={hist}>    
    <Switch>
      <Route path="/student" component={Student} />
      <Route path="/home" component={Home}/>
      <Redirect from="/" to="/student/dashboard" />
    </Switch>
  </Router>
  </Suspense>,
  document.getElementById("root")
);
