import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

const Homepage = Loadable(lazy(() => import("views/admin/index")));
const Auth = Loadable(lazy(() => import("views/admin/index")));

const MainRoutes = {
  path: "/admin",
  element: (
    // <AuthGuard>
    <MainLayout />
    // </AuthGuard>
  ),
  children: [
    {
      path: "/admin/auth",
      element: <Auth />,
    },
  ],
};

export default MainRoutes;
