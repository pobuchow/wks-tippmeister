import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard } from "./Dashboard";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";

export const Main = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <BrowserRouter history={history}>
      <Provider store={store}>
        <div>
          <ConnectedNavigation />
          <Route
            exact
            path="/dashboard"
            render={() => <ConnectedDashboard gameId={gameId} />}
          />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
