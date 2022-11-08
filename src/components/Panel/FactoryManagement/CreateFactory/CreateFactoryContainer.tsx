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
import ContactInfo from "./ContactInfo/ContactInfo";
import FactoryDetails from "./FactoryDetails/FactoryDetails";
import FactoryAddress from "./FactoryAddress/FactoryAddress";
import FinancialData from "./FinancialData/FinancialData";

interface IPropTypes {}

const CreateFactoryContainer: FC<IPropTypes> = ({}) => {
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
                      `/FactoryManagement/CreateFactory/FactoryDetails`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/FactoryManagement/CreateFactory/FactoryDetails`
                    );
                  }}
                >
                  مشخصات کارخانه
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/FactoryManagement/CreateFactory/ContactInfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/FactoryManagement/CreateFactory/ContactInfo`
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
                      `/FactoryManagement/CreateFactory/FactoryAddress`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/FactoryManagement/CreateFactory/FactoryAddress`
                    );
                  }}
                >
                  آدرس کارخانه
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/FactoryManagement/CreateFactory/FinancialData`
                    ),
                  })}
                  onClick={() => {
                    history.push(
                      `/FactoryManagement/CreateFactory/FinancialData`
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
                path={`/FactoryManagement/CreateFactory/FactoryDetails`}
                component={FactoryDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/FactoryDetails/:id`}
                component={FactoryDetails}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/ContactInfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/ContactInfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/FactoryAddress`}
                component={FactoryAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/FactoryAddress/:id`}
                component={FactoryAddress}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/FinancialData`}
                component={FinancialData}
                exact
              />
              <SimpleProtectedRoute
                path={`/FactoryManagement/CreateFactory/FinancialData/:id`}
                component={FinancialData}
                exact
              />
            </Switch>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
};

export { CreateFactoryContainer };
