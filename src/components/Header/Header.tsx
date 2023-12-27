import { AppRootStateType } from "@/app/store";
import { useActions } from "@/common/hooks/useActions";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { authThunks } from "@/pages/Login";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";


export const Header = () => {
    const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn);

    const { logout } = useActions(authThunks);

    const logoutHandler = () => logout()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ADMIN
                    </Typography>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>ВЫЙТИ</Button>}
                </Toolbar>
            </AppBar>
        </Box >
    )
}