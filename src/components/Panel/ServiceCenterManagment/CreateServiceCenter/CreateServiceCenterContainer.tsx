import classNames from "classnames";
import React, { FC, useState } from "react";
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
import { isSameString } from "../../../../core/utils/same-string.utils";
import { SimpleProtectedRoute } from "../../../common/RouteComponents/SimpleProtectedRoute/SimpleProtectedRoute";
import ServiceInfo from "./ServiceCenterContactInfo/ServiceCenterContactInfo";
import ServiceCenterDetails from "./ServiceCenterDetails/ServiceCenterDetails";
import ServiceCneterAddress from "./ServiceCenterAddress/ServiceCenterAddress";
import FinancialData from "./FinancialData/FinancialData";
type Props = {};

export default function CreateServiceCenterContainer({}: Props) {
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
                      `/ServiceCenterManagement/CreateServiceCenter/ServiceCenterDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ServiceCenterManagement/CreateServiceCenter/ServiceCenterDetails`
                    );
                  }}
                >
                  مشخصات مرکز خدمات
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/ServiceCenterManagement/CreateServiceCenter/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ServiceCenterManagement/CreateServiceCenter/ContactInfo`
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
                      `/ServiceCenterManagement/CreateServiceCenter/ServiceCenterAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ServiceCenterManagement/CreateServiceCenter/ServiceCenterAddress`
                    );
                  }}
                >
                  آدرس مرکز خدمات
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/ServiceCenterManagement/CreateServiceCenter/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ServiceCenterManagement/CreateServiceCenter/FinancialData`
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
                path={`/ServiceCenterManagement/CreateServiceCenter/ServiceCenterDetails`}
                component={ServiceCenterDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/ServiceCenterDetails/:id`}
                component={ServiceCenterDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/ContactInfo`}
                component={ServiceInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/ContactInfo/:id`}
                component={ServiceInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/ServiceCenterAddress`}
                component={ServiceCneterAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/ServiceCenterAddress/:id`}
                component={ServiceCneterAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/ServiceCenterManagement/CreateServiceCenter/FinancialData/:id`}
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
