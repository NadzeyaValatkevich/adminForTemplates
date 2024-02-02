import { Logo } from "./Logo";
import Box from '@mui/material/Box';
import { MenuNames } from "./MenuNames";
import { Phones } from "./Phones";

export const MainMenuManagement = () => {
    return (
        <Box sx={{ width: "100%", padding: '50px 32px 10px 50px' }}>
            <Logo />
            <MenuNames />
            <Phones />
        </Box>
    )
}