import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const Homepage = Loadable(lazy(() => import('views/pages/homepage')));
const SinglePost = Loadable(lazy(() => import('views/pages/post/single')));
const SingleCategory = Loadable(lazy(() => import('views/pages/category/single')));

// const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('views/pages/register')));


// import Homepage from 'views/pages/homepage';

const MainRoutes = {
    path: '/',
    element: (
        // <AuthGuard>
        <MainLayout />
        // </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Homepage />
        },
        // {
        //     path: '/login',
        //     element: <AuthLogin />
        // },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: '/post/:id',
            element: <SinglePost />
        },
        {
            path: '/kategoria/:id',
            element: <SingleCategory />
        }
    ]
};

export default MainRoutes;
