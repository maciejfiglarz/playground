// import { lazy } from 'react';
import { useRoutes } from "react-router-dom";
// routes
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
// import AuthenticationRoutes from './AuthenticationRoutes';
// import Loadable from 'ui-component/Loadable';
// const Homepage = Loadable(lazy(() => import('views/pages/homepage')));
// import Homepage from 'views/pages/homepage';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, AdminRoutes, UserRoutes]);
}
