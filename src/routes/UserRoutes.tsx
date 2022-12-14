import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

// const Profile = Loadable(lazy(() => import("views/user/profile")));
const Create = Loadable(lazy(() => import("views/pages/create")));
const UserSettings = Loadable(lazy(() => import("views/user/settings")));

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    // {
    //   path: "/profil/:id",
    //   element: <Profile />,
    // },
    {
      path: "/dodaj",
      element: <Create />,
    },
    {
      path: "/ustawienia/:page",
      element: <UserSettings />,
    },
  ],
};

export default MainRoutes;
