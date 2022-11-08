import React from "react";
import Style from "./UsageItem.module.scss";
type IPropTypes = {
  title: string;
  mainIcon: string;
  description: string;
  hoverIcon: string;
  className?: string;
  onClick?: Function;
};

function UsageItem({
  title,
  mainIcon,
  description,
  hoverIcon,
  className,
  onClick,
}: IPropTypes) {
  return (
    <div
      className={`${className} ${Style.container}`}
      onClick={() => onClick && onClick()}
    >
      <div className={Style.mainBox}>
        <img src={mainIcon} alt="main item icon" className={Style.mainIcon} />
        <h4 className="text-center mt-2">{title}</h4>
      </div>
      <div className={Style.hoverBox}>
        <img src={hoverIcon} alt="main item icon" className={Style.mainIcon} />
        <p className={Style.description}>{description}</p>
      </div>
    </div>
  );
}
export default UsageItem;
