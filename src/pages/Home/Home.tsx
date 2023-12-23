import { Navigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { Loader } from "../../components/Loader/Loader"
import { Sidebar } from "../../components/Sidebar/Sidebar"

const isLoggedIn = true

if (!isLoggedIn) {
    <Navigate to={'/login'} />
}

export const Home = () => {

    return (
        <>
            <Header />
            <Sidebar />
            <h1>Home</h1>
        </>
    )
}