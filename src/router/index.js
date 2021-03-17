import { lazy, Suspense } from "react";
import {  Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import routes from "./config";
import GlobalStyles from "../globalStyles";
import { BoxesLoader } from "react-awesome-loaders";
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();


const Router = () => {
  return (
    <Suspense fallback={<BoxesLoader
      boxColor={"#6366F1"}
      style={{ marginBottom: "20px" }}
      desktopSize={"128px"}
      mobileSize={"80px"}
      duration={2000}
    />}>
      {/* <GlobalStyles /> */}
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}

            />
          );
        })}
      </Switch>
    </Suspense>
    
  );
};

export default Router;
