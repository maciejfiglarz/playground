import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

const Profile = Loadable(lazy(() => import("views/user/profile")));

const MainRoutes = {
  path: "/profile",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/profile/:id",
      element: <Profile />,
    },
  ],
};

export default MainRoutes;
