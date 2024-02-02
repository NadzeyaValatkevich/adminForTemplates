import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export const Logo = () => {
    return (
        <Box sx={{ width: "100%", marginBottom: "50px" }}>
            <Typography variant='h4'>Логотип</Typography>
            <Divider sx={{ marginBottom: "30px" }} />
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <Paper>LOGO</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Расширение файла</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Выберите файл</Paper>
                </Grid>
            </Grid>
        </Box>
    )
}