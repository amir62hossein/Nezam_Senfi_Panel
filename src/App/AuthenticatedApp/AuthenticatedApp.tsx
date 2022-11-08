import React from "react";
import { Route, Router, Switch, useLocation } from "react-router-dom";
import { SignOut } from "../../components/Authentication/SignOut/SignOut";
import { LandingRoute } from "../../components/common/RouteComponents/LandingRoute/LandingRoute";
import { ProtectedRoute } from "../../components/common/RouteComponents/ProtectedRoute";
import { SigninOidc } from "../../components/SigninOidc/SigninOidc";
import { FailPage } from "../../components/WalletContainer/FailPage/FailPage";
import { SuccessPage } from "../../components/WalletContainer/SuccessPage/SuccessPage";
import { IAuthenticatedRoute } from "../../configs/RouteConfig";
import AuthenticatedRoutesConfig from "../../configs/RouteConfig/index";
import { LandingRoutes } from "../../configs/RouteConfig/Landing.routes";
import { ToastTypes } from "../../core/enums";
import { showToast } from "../../core/utils";
import { history } from "../../history";
import { Login } from "../../screens/Authentication/Login/Login";
import { AccessDenied } from "../../screens/Errors/AccessDenied";

const AuthenticatedApp: React.FC = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Switch>
          {AuthenticatedRoutesConfig.map((item: IAuthenticatedRoute, key) => {
            return (
              <ProtectedRoute
                path={item.path}
                component={item.component}
                exact={item.exact}
                roles={item.roles}
                status={item.status ? item.status : undefined}
                key={key}
              />
            );
          })}

          {LandingRoutes.map((item, key) => {
            return <LandingRoute {...item} key={key} />;
          })}

          <Route path="/LogOut" component={SignOut} />
          <Route exact path="/access-denied" component={AccessDenied} />
          <Route exact path="/Wallet/Success" component={SuccessPage} />
          <Route exact path="/Wallet/Fail" component={FailPage} />
          <Route path="/Login" exact={true}>
            <Login />
          </Route>
          <Route path="/signin-oidc" exact={true}>
            <SigninOidc />
          </Route>
          <Route
            path="/Register"
            render={() => {
              history.push("/");
              return null;
            }}
          />
          <Route
            render={() => {
              history.push("/Dashboard");
              showToast(["صفحه مورد نظر یافت نشد"], ToastTypes.error);
              return null;
            }}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export { AuthenticatedApp };
