import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

const Homepage = Loadable(lazy(() => import("views/pages/homepage")));
const SinglePost = Loadable(lazy(() => import("views/pages/post/single")));
const SingleCategory = Loadable(
  lazy(() => import("views/pages/category/single"))
);

// const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import("views/pages/register")));
const AuthLogin = Loadable(lazy(() => import("views/authentication/login")));
const AuthAdmin = Loadable(lazy(() => import("views/admin/auth")));

// import Homepage from 'views/pages/homepage';

const MainRoutes = {
  path: "/",
  element: (
    // <AuthGuard>
    <MainLayout />
    // </AuthGuard>
  ),
  children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/auth",
      element: <AuthAdmin />,
    },
    {
      path: "/register",
      element: <AuthRegister />,
    },
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/post/:id",
      element: <SinglePost />,
    },
    {
      path: "/kategoria/:id",
      element: <SingleCategory />,
    },
  ],
};

export default MainRoutes;
