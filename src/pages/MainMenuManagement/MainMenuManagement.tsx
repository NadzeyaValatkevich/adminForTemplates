import { Logo } from "./Logo";
import Box from '@mui/material/Box';
import { MenuNames } from "./MenuNames";
import { Phones } from "./Phones";
import { useEffect } from "react";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { fetchMainMenuItems } from "./mainMenuThunks";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { AppRootStateType } from "@/app/store";
import { MainMenuItemsType } from "@/common/types/mainMenuTypes";

export const MainMenuManagement = () => {
    const dispatch = useAppDispatch();
    const mainMenuItems = useAppSelector((state: AppRootStateType): MainMenuItemsType => state.mainMenu.mainMenuItems);

    //возможно нужно будет вынести на уровень выше
    // useEffect(() => {
    //     dispatch(fetchMainMenuItems())
    // }, [dispatch, mainMenuItems]);

    return (
        <Box sx={{ width: "100%", padding: '50px 32px 10px 50px' }}>
            <Logo />
            <MenuNames mainMenuItems={mainMenuItems} />
            <Phones />
        </Box>
    )
}