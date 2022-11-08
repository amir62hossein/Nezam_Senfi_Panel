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

const ProvinceContainer: FC<IPropTypes> = ({}) => {
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
                      `/JahadManagement/Province/details`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Province/details`);
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
                      `/JahadManagement/Province/contactinfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Province/contactinfo`);
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
                      `/JahadManagement/Province/address`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Province/address`);
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
                path={`/JahadManagement/Province/details`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Province/details/:id`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Province/contactinfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Province/contactinfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/JahadManagement/Province/address`}
                component={Address}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Province/address/:id`}
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

export { ProvinceContainer };
