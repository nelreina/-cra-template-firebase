import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Loading from "./components/Loading";
import Dashboard from "./pages/Dashboard";

import { AuthCheck } from "reactfire";
import FormikPage from "./pages/Users";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <AuthCheck fallback={<Redirect to="/" />}>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/users" component={FormikPage} />
        </AuthCheck>

        <Route exact path="/" component={Landing} />
      </Router>
    </Suspense>
  );
};

export default hot(module)(App);
