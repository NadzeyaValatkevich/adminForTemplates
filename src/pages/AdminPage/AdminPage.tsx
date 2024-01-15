import { Header } from "@/components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import React from "react"
import { RoutesComponent } from "@/common/routesPages/RoutesComponent"
import { Outlet } from "react-router-dom"



export const AdminPage = () => {
    // const navigate = useNavigate()
    // const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)
    const is_superuser = useAppSelector((state: AppRootStateType): boolean => state.app.is_superuser);

    // useEffect(() => {
    //     !isLoggedIn && navigate('/login')
    // }, [isLoggedIn, navigate])


    return (
        <div>
            <Header />
            <Sidebar />
            <Outlet />
            {/* <RoutesComponent /> */}
            {/* <h1 style={{ textAlign: "center" }}>{is_superuser ? "Hello superUser" : "Hello user"}</h1> */}
        </div>
    )

}