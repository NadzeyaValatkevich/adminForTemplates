import { useNavigate } from "react-router-dom"
import { Header } from "@/components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { AppRootStateType } from "@/app/store"
import { useAppSelector } from "@/common/hooks/useAppSelector"



export const Home = () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return navigate('/login')
    }

    return (
        <div>
            <Header />
            <Sidebar />
            <h1>Home</h1>
        </div>
    )
}