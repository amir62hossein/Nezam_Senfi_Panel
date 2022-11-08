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
import classNames from "classnames";
import { isSameString } from "../../../../core/utils/same-string.utils";
import { SimpleProtectedRoute } from "../../../common/RouteComponents/SimpleProtectedRoute/SimpleProtectedRoute";
import LiveStockDetails from "./LiveStockDetails";
import ContactInfo from "./ContactInfo";
import LiveStockAddress from "./LiveStockAddress";
import {LiveStockSpecifiction} from "./LiveStockSpecifiction/LiveStockSpecifiction";
import FinancialData from "./FinancialData";

type Props = {};

export default function CreateLiveStockContainer({}: Props) {
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
                      `/LiveStockManagement/CreateLiveStock/LiveStockDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/LiveStockManagement/CreateLiveStock/LiveStockDetails`
                    );
                  }}
                >
                  مشخصات دامداری
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/LiveStockManagement/CreateLiveStock/LiveStockAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/LiveStockManagement/CreateLiveStock/LiveStockAddress`
                    );
                  }}
                >
                  آدرس دامداری
                </NavLink>
              </NavItem>
              <NavLink
                className={classNames({
                  active: isSameString(
                    location.pathname,
                    `/LiveStockManagement/CreateLiveStock/LiveStockSpecifiction`
                  ),
                })}
                onClick={() => {
                  history.push(
                    `/LiveStockManagement/CreateLiveStock/LiveStockSpecifiction`
                  );
                }}
              >
                ثبت مشخصات دام
              </NavLink>
            </Nav>
          </TabContent>

          <TabContent className="py-50" activeTab={toggle}>
            <Switch>
              <SimpleProtectedRoute
                path={`/LiveStockManagement/CreateLiveStock/LiveStockDetails`}
                component={LiveStockDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/LiveStockManagement/CreateLiveStock/LiveStockDetails/:id`}
                component={LiveStockDetails}
                exact
              />

              <SimpleProtectedRoute
                path={`/LiveStockManagement/CreateLiveStock/LiveStockAddress`}
                component={LiveStockAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/LiveStockManagement/CreateLiveStock/LiveStockAddress/:id`}
                component={LiveStockAddress}
                exact
              />
               <SimpleProtectedRoute
                path={`/LiveStockManagement/CreateLiveStock/LiveStockSpecifiction`}
                component={LiveStockSpecifiction}
                exact
              />
            </Switch>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}
