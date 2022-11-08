import { LeftCol } from "./LeftCol/LeftCol";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText,
  Container,
} from "reactstrap";
import Style from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";
import { LinkButton } from "../../../../components/common/Buttons/LinkButton/LinkButton";
import { createContext, useContext, useState } from "react";
import { NavbarMenu } from "../../../../core/utils/context/NavbarContext";
import { useUserAuth } from "../../../../core/utils/context/AuthenticationContext";
import ImageLogo from "../../../../assets/img/logo/samang_logo2.png";
import { Bell, LogOut, Power, User } from "react-feather";
import PrimaryButton from "./../../../../components/common/Buttons/PrimaryButton/PrimaryButton";

const Header = () => {
  const history = useHistory();
  const { isOpen, setIsOpen } = useContext(NavbarMenu);
  const { token, setTokenState } = useUserAuth();

  return (
    <header className={Style.header}>
      <Container fluid>
        <Navbar className={Style.NavbarHolder} expand="md" light>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <NavbarBrand href="/" className="display-1">
            <img
              style={{ width: "60px", height: "60px", borderRadius: "100%" }}
              src={ImageLogo}
              alt="logo"
            />
            <span className={`${Style.headerText} d-none d-md-inline-block`}>
              سامانه مدیریت نهاده دامی کشور "سمند"
            </span>
          </NavbarBrand>
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className={Style.NavItem} to="#">
                    خانه
                  </Link>
                </NavLink>
              </NavItem>
              {token && (
                <NavItem>
                  <NavLink>
                    <Link className={Style.NavItem} to="/Dashboard">
                      داشبورد
                    </Link>
                  </NavLink>
                </NavItem>
              )}
            </Nav>

            <LeftCol className="d-block d-md-none">
              <Link className={Style.NavItem} to="#">
                لینک
              </Link>
            </LeftCol>
            <LeftCol className="d-block d-md-none mr-4">
              <Link className={Style.NavItem} to="#">
                داشبورد
              </Link>
            </LeftCol>
          </Collapse>
          <LeftCol className="d-none d-md-block mr-4">
            <PrimaryButton text="آموزش" />
          </LeftCol>
        </Navbar>
      </Container>
    </header>
  );
};

export { Header };
