import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { Login } from '@/pages/Login';
import { HomePage } from '@/pages/Home';
import { PrivateRoutes } from '@/utils/PrivateRoutes';


const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
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