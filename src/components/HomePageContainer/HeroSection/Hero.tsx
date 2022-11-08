import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../../common/Buttons/PrimaryButton/PrimaryButton";
import Style from "./Hero.module.scss";
import { login } from "../../../core/services/authentication/authentication.service";
import { useUserAuth } from "../../../core/utils/context/AuthenticationContext";
interface IPropTypes {
  title: string;
  introduction: string;
}

const Hero: FC<IPropTypes> = ({ title, introduction }) => {
  const history = useHistory();
  const { token, setTokenState } = useUserAuth();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <>
      <div className={`${Style.bgcontainer} row`}>
        <div className={Style.leftlayer}></div>
        <div className={Style.bg}></div>
        <div className={`${Style.secbg} d-none d-md-block`}></div>
        <div className="d-flex flex-column flex-md-row">
          <div className={"d-flex flex-column " + Style.rightBox}>
            <div className={Style.info}>
              <h4 className={Style.title}>{title}</h4>
              <p className={"h5 " + Style.introduction}>{introduction}</p>
              <div className={Style.btnHolder}>
                {!token && (
                  <PrimaryButton
                    isLoading={isLogin}
                    text="ورود به سامانه"
                    style={{
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setIsLogin(true);
                      login();
                    }}
                    outline
                  />
                )}
                {!token && (
                  <PrimaryButton
                    isLoading={isRegister}
                    text="ایجاد کاربری در سامانه"
                    style={{
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // setIsRegister(true);
                      // login();
                      window.location.href ="https://register.dev.irsamand.ir/Register"
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={"d-flex flex-column text-center " + Style.leftBox}>
            <div className="m-auto" style={{ visibility: "hidden" }}>
              ...content
            </div>
            {/* blue design from before */}
            {/* <img src={landingBG} alt="" className={Style.mainSvg} /> */}
            {/* <img src={svgImg} alt="" className={Style.svgImg} /> */}
            {/* copied design from sepand  */}
            {/* <img
          src={carSvg}
          alt=""
          className={`d-none d-md-block ${Style.mainSvg}`}
        /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
