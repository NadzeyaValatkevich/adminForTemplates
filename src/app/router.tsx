import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { AdminPage } from '@/pages/AdminPage';
import { PrivateRoutes } from '@/utils/PrivateRoutes';
import { NewPassword } from '@/pages/Info/NewPassword';
import { MainPage } from '@/pages/PagesSite/MainPage';
import { KitchenPage } from '@/pages/PagesSite/KitchenPage';


const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <AdminPage />,
        children: [
            {
                path: 'info/',
                children: [
                    {
                        path: 'change_password',
                        element: <NewPassword />,
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