import React, { FC } from "react";
import Style from "./Footer.module.scss";
import { Container } from "reactstrap";
import ImageLogo from "../../../../assets/img/logo/samang_logo2.png";

interface FooterProps {}
const Footer: FC<FooterProps> = ({}: FooterProps) => {
  return (
    <footer className={"d-flex flex-column " + Style.footerTopContaienr}>
      <Container fluid>
        <div className={Style.container}>
          <div>
            <img
              style={{ width: "60px", height: "60px", borderRadius: "100%" }}
              src={ImageLogo}
              alt="logo"
            />
          </div>
          <div
            className={
              "d-flex flex-wrap flex-sm-row justify-content-between " +
              Style.linkContainer
            }
          >
            <ul
              className={
                "m-0 p-0  text-center text-md-left " + Style.footerList
              }
            >
              <li className={Style.listHeader}>سمند</li>
              <li>قوانین و مقررات</li>
            </ul>
            <ul
              className={"m-0 p-0 text-center text-md-left " + Style.footerList}
            >
              <li className={Style.listHeader}>لینک های مرتبط</li>
              <li>اتحادیه کارخانجات کشور</li>
              <li>وزارت کشاورزی</li>
            </ul>
            <ul
              className={"m-0 p-0 text-center text-md-left " + Style.footerList}
            >
              <li className={Style.listHeader}>تماس با ما</li>
              <li>کد پستی: 8615554514</li>
              <li>پست الکترونیک: info@irsamand.ir</li>
              <li>تلفن‌های پشتیبانی: </li>
              <li>021 - 91099900</li>
              <li>021 - 91080807</li>
            </ul>
          </div>
          <div className="text-center">
            کلیه حقوق مادی و معنوی این سایت متعلق به{" "}
            <a href="Http://www.an-co.ir">شرکت آتی نگر</a> و اتحادیه خوراک دام و
            طیور و آبزیان استان سمنان می‌باشد.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
