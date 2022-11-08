import { lazy } from "react";

export const LandingRoutes = [
  {
    path: "/",
    component: lazy(() =>
      import("../../screens/Landing/HomePage/HomePage").then((module) => ({
        default: module.HomePage,
      }))
    ),
    exact: true,
  },
  // {
  //   path: "/register",
  //   component: lazy(() =>
  //     import("../../screens/Authentication/Register/Register").then(
  //       (module) => ({
  //         default: module.Register,
  //       })
  //     )
  //   ),
  //   exact: true,
  // },
];
