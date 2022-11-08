import React, { useState } from "react";
import classNames from "classnames";
import { isSameString } from "../../../../core/utils/same-string.utils";
import { Switch, useHistory, useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
} from "reactstrap";
import { SimpleProtectedRoute } from "../../../common/RouteComponents/SimpleProtectedRoute/SimpleProtectedRoute";
import ContactInfo from "./ContactInfo";
import FinancialData from "./FinancialData";
import UnionAddress from "./UnionAddress";
import UnionDetails from "./UnionDetails";
type Props = {};

export default function UnionListContainer({}: Props) {
  const history = useHistory();
  const location = useLocation();
  const [toggle, setToggle] = useState<string>("1");
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardBody>
          <TabContent>
            <Nav tabs className="nav-justified">
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/UnionManagement/CreateUnion/UnionDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/UnionManagement/CreateUnion/UnionDetails`);
                  }}
                >
                  مشخصات اتحادیه
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/UnionManagement/CreateUnion/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/UnionManagement/CreateUnion/ContactInfo`);
                  }}
                >
                  اطلاعات تماس
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/UnionManagement/CreateUnion/UnionAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/UnionManagement/CreateUnion/UnionAddress`);
                  }}
                >
                  آدرس اتحادیه
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/UnionManagement/CreateUnion/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/UnionManagement/CreateUnion/FinancialData`);
                  }}
                >
                  اطلاعات مالی
                </NavLink>
              </NavItem>
            </Nav>
          </TabContent>

          <TabContent className="py-50" activeTab={toggle}>
            <Switch>
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/UnionDetails`}
                component={UnionDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/UnionDetails/:id`}
                component={UnionDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/ContactInfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/ContactInfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/UnionAddress`}
                component={UnionAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/UnionAddress/:id`}
                component={UnionAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/UnionManagement/CreateUnion/FinancialData/:id`}
                component={FinancialData}
                exact
              />
            </Switch>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}
