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
import { Address } from "./Address/Address";
import { ContactInfo } from "./ContactInfo/ContactInfo";
import { Details } from "./Details/Details";

interface IPropTypes {}

const CountyContainer: FC<IPropTypes> = ({}) => {
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
                      `/JahadManagement/County/details`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/County/details`);
                  }}
                >
                  مشخصات جهاد
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classNames({
                    active: isSameString(
                      location.pathname,
                      `/JahadManagement/County/contactinfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/County/contactinfo`);
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
                      `/JahadManagement/County/address`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/County/address`);
                  }}
                >
                  آدرس
                </NavLink>
              </NavItem>
            </Nav>
          </TabContent>

          <TabContent className="py-50" activeTab={toggle}>
            <Switch>
              <SimpleProtectedRoute
                path={`/JahadManagement/County/details`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/County/details/:id`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/County/contactinfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/County/contactinfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/JahadManagement/County/address`}
                component={Address}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/County/address/:id`}
                component={Address}
                exact
              />
            </Switch>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
};

export { CountyContainer };
