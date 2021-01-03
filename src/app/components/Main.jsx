import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { ConnectedLogin } from "./Login";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedGameboard } from "./Gameboard";

const RouteGuard = Component => ({match}) => {
  if(!store.getState().session.authenticated){
    return <Redirect to="/" />;
  }
  return <Component match={match} />
}

export const Main = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <div>
          <Switch>
          <Route
              exact
              path="/"
              component={ConnectedLogin}
            />
            <Route
              exact
              path="/games"
              render={RouteGuard(ConnectedGameboard)}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};
