import React from "react";
import {
  Circle,
  Gift,
  GitPullRequest,
  Home,
  Info,
  Layers,
  MessageSquare,
  Package,
  Settings,
  User,
  Users,
} from "react-feather";
import { UserRoles } from "../core/enums";

interface ISidebarItem {
  id?: any;
  title?: string;
  icon?: React.ReactNode;
  permissions?: Array<string>;
  path?: string;
  newTab?: boolean;
  children?: any;
}

interface ISidebarItemWithChilde extends ISidebarItem {
  children?: Array<ISidebarItem>;
}
export const NavigationConfig: Array<ISidebarItemWithChilde> = [
  {
    id: "home",
    title: "پیشخوان",
    path: "/Dashboard",
    icon: <Home className="sidebar-icon" size={20} />,
  },
  {
    id: "UserInfo",
    title: "پروفایل",
    icon: <User className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin, UserRoles.UserReal],
    children: [
      {
        title: "اطلاعات هویتی",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin, UserRoles.UserReal],
        path: "/PersonalInfo/Profile",
      },
    ],
  },
  {
    id: "AdminManagement",
    title: "مدیریت ادمین ها",
    icon: <Users className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ادمین استانی",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/AdminManagement/ProvinceAdmin",
      },
    ],
  },

  {
    id: "JahadManagement",
    title: "مدیریت جهاد",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "جهاد کشوری",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/JahadManagement/Mainlocation/details",
      },
      {
        title: "جهاد استانی",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/JahadManagement/Province/details",
      },
      {
        title: "جهاد شهرستان",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/JahadManagement/County/details",
      },
    ],
  },
  {
    id: "FactoryManagment",
    title: "مدیریت کارخانه",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت کارخانه",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/FactoryManagement/CreateFactory/FactoryDetails",
      },
      {
        title: "لیست کارخانه",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/FactoryManagement/FactoryList",
      },
    ],
  },
  {
    id: "UnionManagement",
    title: "مدیریت اتحادیه",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت اتحادیه",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/UnionManagement/CreateUnion/UnionDetails",
      },
      {
        title: "لیست اتحادیه",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/UnionManagement/UnionList",
      },
    ],
  },
  {
    id: "TaAvoniManagement",
    title: "مدیریت تعاونی",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت تعاونی",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/TaAvoniManagement/CreateTaAvoni/TaAvoniDetails",
      },
      {
        title: "لیست تعاونی",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/TaAvoniManagement/TaAvoniList",
      },
    ],
  },
  {
    id: "SellerManagement",
    title: "مدیریت عامل فروش",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت عامل فروش",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/SellerManagement/CreateSeller/SellerDetails",
      },
      {
        title: "لیست عامل های فروش",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/SellerManagement/SellerList",
      },
    ],
  },
  {
    id: "ImporterManagement",
    title: "مدیریت شرکت وارد کننده",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت شرکت وارد کننده",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/ImporterManagement/CreateImporter/ImporterDetails",
      },
      {
        title: "لیست شرکت های وارد کننده",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/ImporterManagement/ImporterList",
      },
    ],
  },
  {
    id: "LiveStockManagement",
    title: "مدیریت دامداری",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت دامداری",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/LiveStockManagement/CreateLiveStock/LiveStockDetails",
      },
      {
        title: "لیست دامداری ها",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/LiveStockManagement/LiveStockList",
      },
    ],
  },
  {
    id: "ServiceManagement",
    title: "مراکز خدمات",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت مرکز خدمات",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/ServiceCenterManagement/CreateServiceCenter/ServiceCenterDetails",
      },
      {
        title: "لیست مراکز خدمات",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/ServiceCenterManagement/ServiceCenterList",
      },
    ],
  },
  {
    id: "Periods",
    title: "دوره ها",
    icon: <Info className="sidebar-icon" size={20} />,
    permissions: [UserRoles.SupperAdmin],
    children: [
      {
        title: "ثبت دوره",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/Periods/CreatePeriod",
      },
      {
        title: "لیست دوره ها",
        icon: <Home className="sidebar-icon" size={20} />,
        permissions: [UserRoles.SupperAdmin],
        path: "/Periods/PeriodList",
      },
    ],
  },
];

export const navigationDetail = [
  {
    active: "/startupdesk/List",
    for: ["/startupdesk/"],
  },
];
