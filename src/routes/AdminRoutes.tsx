import { lazy } from "react";

// project imports
import AdminLayout from "layout/AdminLayout";
import Loadable from "ui-component/Loadable";

const Homepage = Loadable(lazy(() => import("views/admin/index")));
const Users = Loadable(lazy(() => import("views/admin/users")));
const Auth = Loadable(lazy(() => import("views/admin/index")));

const MainRoutes = {
  path: "/admin",
  element: (
    // <AdminGuard>
    <AdminLayout />
    // </AdminGuard>
  ),
  children: [
    {
      path: "/admin",
      element: <Homepage />,
    },
    {
      path: "/admin/users",
      element: <Users />,
    },
  ],
};

export default MainRoutes;
