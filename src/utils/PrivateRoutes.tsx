import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {

    const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)

    console.log(isLoggedIn)
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}