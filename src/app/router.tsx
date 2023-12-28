import { useAppSelector } from '@/common/hooks/useAppSelector';
import { createBrowserRouter, RouterProvider, RouteObject, Navigate, Outlet } from 'react-router-dom';
import { AppRootStateType } from './store';
import { Home } from '@/pages/Home/Home';
import { Login } from '@/pages/Login';

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
]

const PrivateRoutes = () => {

    const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)


    return isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />
}

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