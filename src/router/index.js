import { lazy, Suspense } from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./config";
import GlobalStyles from "../globalStyles";
import { BoxesLoader } from "react-awesome-loaders";
import "assets/css/material-dashboard-react.css?v=1.9.0";
import './index.css';
import Loader from "components/Loader/Loader"
const hist = createBrowserHistory();



const Router = () => {
  return (
    <Suspense fallback={<Loader/>}>
     
      {/* <GlobalStyles /> */}
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => {
                return new Promise(resolve => {
                  setTimeout(() => resolve(import(`../pages/${routeItem.component}`)), 1000);
                });
              })}


            />
          );
        })}
      </Switch>
    </Suspense>
    
  );
};

export default Router;
