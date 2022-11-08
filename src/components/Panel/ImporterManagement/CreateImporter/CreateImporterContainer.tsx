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
import ImporterAddress from "./ImporterAddress";
import ImporterDetails from "./ImporterDetails";
type Props = {};

export default function ImporterListContainer({}: Props) {
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
                      `/ImporterManagement/CreateImporter/ImporterDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ImporterManagement/CreateImporter/ImporterDetails`
                    );
                  }}
                >
                  مشخصات شرکت
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/ImporterManagement/CreateImporter/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ImporterManagement/CreateImporter/ContactInfo`
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
                      `/ImporterManagement/CreateImporter/ImporterAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ImporterManagement/CreateImporter/ImporterAddress`
                    );
                  }}
                >
                  آدرس شرکت
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/ImporterManagement/CreateImporter/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/ImporterManagement/CreateImporter/FinancialData`
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
                path={`/ImporterManagement/CreateImporter/ImporterDetails`}
                component={ImporterDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/ImporterDetails/:id`}
                component={ImporterDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/ContactInfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/ContactInfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/ImporterAddress`}
                component={ImporterAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/ImporterAddress/:id`}
                component={ImporterAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/ImporterManagement/CreateImporter/FinancialData/:id`}
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
