import React from "react";
import Style from "./UsageSection.module.scss";
import UsageItem from "./UsageItem/UsageItem";
import usageIcon from "../../../assets/img/svg/UsageItemTest.svg";
import usageIconHover from "../../../assets/img/svg/UsageItemTestHover.svg";
import { Container } from "reactstrap";
type IPropTypes = {};

function UsageSection({}: IPropTypes) {
  const Items = [
    {
      title: "جهاد کشاورزی",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
    {
      title: "اتحادیه ها",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
    {
      title: "کارخانجات",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
    {
      title: "تعاونی ها",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
    {
      title: "عاملین فروش",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
    {
      title: "دامداران",
      description: "",
      mainIcon: usageIcon,
      hoverIcon: usageIconHover,
    },
  ];
  return (
    <div className={Style.container}>
      <Container fluid>
        <h3 className={Style.h3}>
          افراد و سازمان ها چگونه از سمند بهره میبرند؟
        </h3>
        <div className={Style.itemContainer}>
          <div className="d-flex justify-content-center flex-wrap">
            {Items.map((item, index) => (
              <UsageItem
                onClick={() => console.log("click")}
                description={item.description}
                hoverIcon={item.hoverIcon}
                mainIcon={item.mainIcon}
                title={item.title}
                key={index}
              />
            ))}
          </div>
          <div className="w-75 m-auto d-flex justify-content-center flex-wrap">
            <div className={Style.keshvar}></div>
            <div className={Style.olia}></div>
            <div className={Style.etehadie}></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default UsageSection;
