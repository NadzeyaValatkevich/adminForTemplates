import { Header } from "@/pages/PagesContainer/Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import React from "react"
import { RoutesComponent } from "@/common/routesPages/RoutesComponent"
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';



export const PagesContainer = () => {
    // const navigate = useNavigate()
    // const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)
    const is_superuser = useAppSelector((state: AppRootStateType): boolean => state.app.is_superuser);


    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </Box>

            {/* <RoutesComponent /> */}
            {/* <h1 style={{ textAlign: "center" }}>{is_superuser ? "Hello superUser" : "Hello user"}</h1> */}
        </>
    )

}