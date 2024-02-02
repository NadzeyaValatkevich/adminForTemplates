import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export const MenuNames = () => {
    return (
        <Box sx={{ width: "100%", marginBottom: "50px" }}>
            <Typography variant='h4'>Названия разделов сайта</Typography>
            <Divider sx={{ marginBottom: "30px" }} />
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <Paper>Главная</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Об усадьбе</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Развлечения</Paper>
                </Grid>
            </Grid>
        </Box>
    )
}