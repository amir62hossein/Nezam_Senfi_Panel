import React, { FC } from "react";
import Hero from "./HeroSection/Hero";
import UsageSection from "./UsageSection/UsageSection";

interface IPropTypes {}

const HomePageContainer: FC<IPropTypes> = ({}) => {
  return (
    <div className="d-flex flex-wrap justify-content-around position-relative">
      <Hero
        title='سامانه مدیریت نهاده دامی کشور "سمند"'
        introduction="سامانه سمند ابزاری به منظور نظارت بر زنجیره تولید و توزیع نهاده دامی با قیمت مصوب سازمان جهاد کشاورزی است. اين سيستم با کنترل فرآیند تخصیص، تولید، توزیع و فروش خوراک دام سلامت روابط اقتصادي حاكم بر اين بازار را تضمين مي نمايد."
      />
      <UsageSection />
    </div>
  );
};

export { HomePageContainer };
