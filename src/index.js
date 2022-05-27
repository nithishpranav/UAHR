
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import PatinetLayout from "layouts/Patient.js";
import AuthLayout from "layouts/Auth.js";
import Register from "views/examples/Register.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/patient" render={(props) => <PatinetLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
      <Redirect from="/" to="/auth" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
