import { lazy } from "react";
import { IAuthenticatedRoute } from ".";

import { UserRoles } from "../../core/enums";

export const AuthenticatedRoutesConfig: Array<IAuthenticatedRoute> = [
  {
    path: "/Dashboard",
    component: lazy(() =>
      import("../../screens/Dashboard/Dashboard").then((module) => ({
        default: module.Dashboard,
      }))
    ),
    exact: true,
    roles: [UserRoles.SupperAdmin, UserRoles.UserReal],
  },
  {
    path: "/PersonalInfo/Profile",
    component: lazy(() =>
      import("../../screens/Panel/PersonalInfo/PersonalInfo").then(
        (module) => ({
          default: module.PersonalInfo,
        })
      )
    ),
    exact: true,
    roles: [UserRoles.SupperAdmin, UserRoles.UserReal],
  },
  {
    path: "/AdminManagement/ProvinceAdmin",
    component: lazy(() =>
      import("../../screens/Panel/AdminManagement/ProvinceAdmin").then(
        (module) => ({
          default: module.ProvinceAdmin,
        })
      )
    ),
    exact: true,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/AdminManagement/ProvinceAdmin/:id",
    component: lazy(() =>
      import(
        "../../screens/Panel/AdminManagement/ProvinceAdmin/ManageAdmins"
      ).then((module) => ({
        default: module.ManageAdmins,
      }))
    ),
    exact: true,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/JahadManagement/Mainlocation",
    component: lazy(() =>
      import(
        "../../screens/Panel/JahadManagement/Mainlocation/Mainlocation"
      ).then((module) => ({
        default: module.Mainlocation,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/JahadManagement/Province",
    component: lazy(() =>
      import("../../screens/Panel/JahadManagement/Province/Province").then(
        (module) => ({
          default: module.Mainlocation,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/JahadManagement/County",
    component: lazy(() =>
      import("../../screens/Panel/JahadManagement/County/County").then(
        (module) => ({
          default: module.County,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/FactoryManagement/CreateFactory",
    component: lazy(() =>
      import(
        "../../screens/Panel/FactoryManagement/CreateFactory/CreateFactory"
      ).then((module) => ({
        default: module.CreateFactory,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/FactoryManagement/FactoryList",
    component: lazy(() =>
      import(
        "../../screens/Panel/FactoryManagement/FactoryList/FactoryList"
      ).then((module) => ({
        default: module.FactoryList,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/UnionManagement/CreateUnion",
    component: lazy(() =>
      import(
        "../../screens/Panel/UnionManagement/CreateUnion/CreateUnion"
      ).then((module) => ({
        default: module.CreateUnion,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/UnionManagement/UnionList",
    component: lazy(() =>
      import("../../screens/Panel/UnionManagement/UnionList/UnionList").then(
        (module) => ({
          default: module.UnionList,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/TaAvoniManagement/CreateTaAvoni",
    component: lazy(() =>
      import(
        "../../screens/Panel/TaAvoniManagement/CreateTaAvoni/CreateTaAvoni"
      ).then((module) => ({
        default: module.CreateTaAvoni,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/TaAvoniManagement/TaAvoniList",
    component: lazy(() =>
      import(
        "../../screens/Panel/TaAvoniManagement/TaAvoniList/TaAvoniList"
      ).then((module) => ({
        default: module.TaAvoniList,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/SellerManagement/CreateSeller",
    component: lazy(() =>
      import(
        "../../screens/Panel/SellerManagement/CreateSeller/CreateSeller"
      ).then((module) => ({
        default: module.CreateSeller,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/SellerManagement/SellerList",
    component: lazy(() =>
      import("../../screens/Panel/SellerManagement/SellerList/SellerList").then(
        (module) => ({
          default: module.SellerList,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/ImporterManagement/CreateImporter",
    component: lazy(() =>
      import(
        "../../screens/Panel/ImporterManagement/CreateImporter/CreateImporter"
      ).then((module) => ({
        default: module.CreateImporter,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/ImporterManagement/ImporterList",
    component: lazy(() =>
      import(
        "../../screens/Panel/ImporterManagement/ImporterList/ImporterList"
      ).then((module) => ({
        default: module.ImporterList,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/LiveStockManagement/CreateLiveStock",
    component: lazy(() =>
      import(
        "../../screens/Panel/LiveStockManagement/CreateLiveStock/CreateLiveStock"
      ).then((module) => ({
        default: module.CreateLiveStock,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/LiveStockManagement/LiveStockList",
    component: lazy(() =>
      import(
        "../../screens/Panel/LiveStockManagement/LiveStockList/LiveStockList"
      ).then((module) => ({
        default: module.LiveStockList,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/ServiceCenterManagement/CreateServiceCenter",

    component: lazy(() =>
      import(
        "../../screens/Panel/ServiceCenterManagement/CreateServiceCenter/CreateServiceCenter"
      ).then((module) => ({
        default: module.CreateServiceCenter,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/ServiceCenterManagement/ServiceCenterList",
    component: lazy(() =>
      import(
        "../../screens/Panel/ServiceCenterManagement/ServiceCenterList/ServiceCenterList"
      ).then((module) => ({
        default: module.ServiceCenterList,
      }))
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/Periods/CreatePeriod",
    component: lazy(() =>
      import("../../screens/Panel/Period/CreatePeriod/CreatePeriod").then(
        (module) => ({
          default: module.CreatePeriod,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
  {
    path: "/Periods/PeriodList",
    component: lazy(() =>
      import("../../screens/Panel/Period/PeriodList/PeriodList").then(
        (module) => ({
          default: module.PeriodList,
        })
      )
    ),
    exact: false,
    roles: [UserRoles.SupperAdmin],
  },
];
