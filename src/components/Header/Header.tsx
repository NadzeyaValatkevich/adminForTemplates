import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";


export const Header = () => {
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
                    <Button color="inherit">SING IN</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}