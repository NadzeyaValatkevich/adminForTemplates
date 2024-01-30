import { AppRootStateType } from "@/app/store";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { logout } from "@/pages/Login/authThunks";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";


export const Header = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state: AppRootStateType): boolean => state.auth.isLoggedIn);

    // const { logout } = useActions(authThunks);

    const logoutHandler = () => dispatch(logout())

    return (
        // <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#366EFF" }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    // color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
                    ADMIN
                </Typography>
                {isLoggedIn && <Button onClick={logoutHandler} sx={{ color: '#fff' }}>ВЫЙТИ</Button>}
            </Toolbar>
        </AppBar>
        // </Box >
    )
}