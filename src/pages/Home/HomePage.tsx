import { Navigate, useNavigate } from "react-router-dom"
import { Header } from "@/components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { useEffect } from "react"
import React from "react"



export const HomePage = () => {
    console.log("home")
    // const navigate = useNavigate()
    // const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)

    // useEffect(() => {
    //     !isLoggedIn && navigate('/login')
    // }, [isLoggedIn, navigate])


    return (
        <div>
            <Header />
            <Sidebar />
            <h1>Home</h1>
        </div>
    )

}