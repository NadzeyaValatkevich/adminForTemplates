import { Routes, Route } from "react-router-dom";
import { KITCHEN_PAGE, LOGO, MAIN_PAGE, NEW_PASSWORD } from "./routes"
import { NewPassword } from "@/pages/Info/NewPassword";
import { MainPage } from "@/pages/PagesSite/MainPage";
import { KitchenPage } from "@/pages/PagesSite/KitchenPage";

export const RoutesComponent = () => {
    const routes = [
        { path: NEW_PASSWORD, component: <NewPassword /> },
        { path: MAIN_PAGE, component: <MainPage /> },
        { path: KITCHEN_PAGE, component: <KitchenPage /> },
        // { path: LOGO, component: <Logo /> },
    ];

    return (
        <Routes>
            {/* <Route path={'*'} element={<Navigate to={ERROR} />} /> */}
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}
        </Routes>

    )
}