import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import CreatePage from "views/pages/create";

const Homepage = Loadable(lazy(() => import("views/pages/homepage")));
const SinglePost = Loadable(lazy(() => import("views/pages/post/single")));
const SingleCategory = Loadable(
  lazy(() => import("views/pages/category/single"))
);
const Profile = Loadable(lazy(() => import("views/user/profile")));


// const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/login')));
const Register = Loadable(lazy(() => import("views/pages/register")));
const Login = Loadable(lazy(() => import("views/authentication/login")));
const ForgotPassword = Loadable(lazy(() => import("views/authentication/forgot-password")));



const AuthAdmin = Loadable(lazy(() => import("views/admin/auth")));

// import Homepage from 'views/pages/homepage';

const MainRoutes = {
  path: "/",
  element: (
    <MainLayout />
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
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/przypomnij-haslo",
      element: <ForgotPassword />,
    },

    {
      path: "/post/:id",
      element: <SinglePost />,
    },

    {
      path: "/profil/:id",
      element: <Profile />,
    },
    {
      path: "/kategoria/:id",
      element: <SingleCategory />,
    },
  ],
};

export default MainRoutes;
