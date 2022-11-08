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
import ContactInfo from "./ContactInfo/ContactInfo";
import FinancialData from "./FinancialData/FinancialData";
import TaAvoniAddress from "./TaAvoniAddress/TaAvoniAddress";
import TaAvoniDetails from "./TaAvoniDetails/TaAvoniDetails";
type Props = {};

export default function TaAvoniListContainer({}: Props) {
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
                      `/TaAvoniManagement/CreateTaAvoni/TaAvoniDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/TaAvoniManagement/CreateTaAvoni/TaAvoniDetails`
                    );
                  }}
                >
                  مشخصات تعاونی
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/TaAvoniManagement/CreateTaAvoni/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/TaAvoniManagement/CreateTaAvoni/ContactInfo`
                    );
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
                      `/TaAvoniManagement/CreateTaAvoni/TaAvoniAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/TaAvoniManagement/CreateTaAvoni/TaAvoniAddress`
                    );
                  }}
                >
                  آدرس تعاونی
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/TaAvoniManagement/CreateTaAvoni/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/TaAvoniManagement/CreateTaAvoni/FinancialData`
                    );
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
                path={`/TaAvoniManagement/CreateTaAvoni/TaAvoniDetails`}
                component={TaAvoniDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/TaAvoniDetails/:id`}
                component={TaAvoniDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/ContactInfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/ContactInfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/TaAvoniAddress`}
                component={TaAvoniAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/TaAvoniAddress/:id`}
                component={TaAvoniAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/TaAvoniManagement/CreateTaAvoni/FinancialData/:id`}
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
