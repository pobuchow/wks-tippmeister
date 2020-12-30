import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
// import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";

export const Main = () => {
  return (
    <BrowserRouter /* history={history} */>
      <Provider store={store}>
        <div>
          <ConnectedNavigation />
          <Switch>
            <Route
              exact
              path="/game/:id/dashboard"
               render={({match}) => (<ConnectedDashboard match={match} />)}
            />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
