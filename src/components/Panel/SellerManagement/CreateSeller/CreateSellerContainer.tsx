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
import SellerAddress from "./SellerAddress";
import SellerDetails from "./SellerDetails/SellerDetails";
type Props = {};

export default function SellerListContainer({}: Props) {
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
                      `/SellerManagement/CreateSeller/SellerDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/SellerManagement/CreateSeller/SellerDetails`
                    );
                  }}
                >
                  مشخصات عامل فروش
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/SellerManagement/CreateSeller/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/SellerManagement/CreateSeller/ContactInfo`);
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
                      `/SellerManagement/CreateSeller/SellerAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/SellerManagement/CreateSeller/SellerAddress`
                    );
                  }}
                >
                  آدرس عامل فروش
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/SellerManagement/CreateSeller/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/SellerManagement/CreateSeller/FinancialData`
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
                path={`/SellerManagement/CreateSeller/SellerDetails`}
                component={SellerDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/SellerDetails/:id`}
                component={SellerDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/ContactInfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/ContactInfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/SellerAddress`}
                component={SellerAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/SellerAddress/:id`}
                component={SellerAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/SellerManagement/CreateSeller/FinancialData/:id`}
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
