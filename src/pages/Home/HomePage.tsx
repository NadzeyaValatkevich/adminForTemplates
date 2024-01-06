import { Header } from "@/components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import React from "react"



export const HomePage = () => {
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
            <h1 style={{ textAlign: "center" }}>{is_superuser ? "Hello superUser" : "Hello user"}</h1>
        </div>
    )

}