import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { PagesContainer } from '@/pages/PagesContainer';
import { PrivateRoutes } from '@/utils/PrivateRoutes';
import { NewPassword } from '@/pages/Info/NewPassword';
import { MainPage } from '@/pages/PagesSite/MainPage';
import { KitchenPage } from '@/pages/PagesSite/KitchenPage';
import { ForgotPassword } from '@/pages/Info/ForgotPassword/ForgotPassword';


const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <PagesContainer />,
        children: [
            {
                path: 'administration/',
                children: [
                    {
                        path: 'change_password',
                        element: <NewPassword />,
                    },
                    {
                        path: 'forgot_password',
                        element: <ForgotPassword />,
                    }
                ]
            },
            {
                path: 'page/',
                children: [
                    {
                        path: 'mainPage',
                        element: <MainPage />,
                    },
                    {
                        path: 'kitchenPage',
                        element: <KitchenPage />,
                    }
                ]
            }
        ]
    },
    // {
    //     path: '/pages/mainPage',
    //     element: <MainPage />,
    // },
    // {
    //     path: '/pages/kitchenPage',
    //     element: <KitchenPage />,
    // },
    // {
    //     path: '/info/set-new-password',
    //     element: <NewPassword />,
    // },
]


const router = createBrowserRouter([
    {
        element: <PrivateRoutes />,
        children: privateRoutes
    },
    ...publicRoutes
])

export const Router = () => {
    return <RouterProvider router={router} />
}