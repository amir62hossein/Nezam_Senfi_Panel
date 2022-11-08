import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./../../history";

import { LandingRoutes } from "../../configs/RouteConfig/Landing.routes";
import { LandingRoute } from "../../components/common/RouteComponents/LandingRoute/LandingRoute";
import { Register } from "../../screens/Authentication/Register/Register";
import { Login } from "../../screens/Authentication/Login/Login";
import { showToast } from "../../core/utils";
import { ToastTypes } from "../../core/enums";
import RegisterCodeInput from "./../../components/Authentication/RegisterContainer/RegisterCodeInput/RegisterCodeInput";
import RegisterCompleteProfile from "../../components/Authentication/RegisterContainer/RegisterCompleteProfile/RegisterCompleteProfile";
import { SigninOidc } from "../../components/SigninOidc/SigninOidc";

const UnAuthenticatedApp: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          {LandingRoutes.map((item, key) => {
            return <LandingRoute {...item} key={key} />;
          })}
          <Route path="/register" exact={true}>
            <Register />
          </Route>
          <Route path="/register/code" exact={true}>
            <RegisterCodeInput />
          </Route>
          <Route path="/register/CompleteProfile" exact={true}>
            <RegisterCompleteProfile />
          </Route>
          <Route path="/Login" exact={true}>
            <Login />
          </Route>
          <Route path="/signin-oidc" exact={true}>
            <SigninOidc />
          </Route>
          {/* <Route path="/signout-oidc" component={SignOutOidc} /> */}
          <Route
            render={() => {
              history.push("/");
              showToast(["صفحه مورد نظر یافت نشد"], ToastTypes.error);
              return null;
            }}
          />
        </Switch>
      </Router>
    </>
  );
};

export { UnAuthenticatedApp };
