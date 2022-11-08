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

const MainlocationContainer: FC<IPropTypes> = ({}) => {
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
                      `/JahadManagement/Mainlocation/details`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Mainlocation/details`);
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
                      `/JahadManagement/Mainlocation/contactinfo`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Mainlocation/contactinfo`);
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
                      `/JahadManagement/Mainlocation/address`
                    ),
                  })}
                  onClick={() => {
                    history.push(`/JahadManagement/Mainlocation/address`);
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
                path={`/JahadManagement/Mainlocation/details`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Mainlocation/details/:id`}
                component={Details}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Mainlocation/contactinfo`}
                component={ContactInfo}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Mainlocation/contactinfo/:id`}
                component={ContactInfo}
                exact
              />

              <SimpleProtectedRoute
                path={`/JahadManagement/Mainlocation/address`}
                component={Address}
                exact
              />
              <SimpleProtectedRoute
                path={`/JahadManagement/Mainlocation/address/:id`}
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

export { MainlocationContainer };
