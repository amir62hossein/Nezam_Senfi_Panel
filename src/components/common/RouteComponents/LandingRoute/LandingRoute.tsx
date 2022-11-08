import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { LandingLayout } from "../../../../App/UnAuthenticatedApp/LandingLayout/LandingLayout";
import { ScrollToTop } from "../../Wrapper/ScrollToTop/ScrollToTop";


interface IPropTypes {
  component: any;
  fullLayout?: any;
  roles?: Array<string>;
  user?: any;
  path: string;
  status?: number;
  statusKey?: string;
  exact?: boolean;
  permissions?: string[] | string;
  flow?: string;
  key: any;
}

const LandingRoute: React.FC<IPropTypes> = ({
  component: Component,
  fullLayout,
  roles = [],
  user,
  path,
  status,
  exact,
  permissions,
  flow,
  key
}) => {
  // const checkExpirty = useCheckExpiry();

  return (
    <Route
      path={path}
      exact={exact}
      key={key}
      render={(props) => {
        return (
          <LandingLayout {...props}>
            <ScrollToTop>
              <Component {...props} permissions={permissions} />
            </ScrollToTop>
          </LandingLayout>
        );
      }}
    />
  );
};

export { LandingRoute };
