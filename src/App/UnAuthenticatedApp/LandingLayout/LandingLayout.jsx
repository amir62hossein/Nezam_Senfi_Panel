import { Header } from "./Header/Header";
// import { Footer } from "./Footer/Footer";
import { Footer } from "./Footer/Footer";
import { Container } from "reactstrap";
import Style from "./LandingLayout.module.scss";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { LandingLayout };
