import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

export const Phones = () => {
    return (
        <Box sx={{ width: "100%", marginBottom: "50px" }}>
            <Typography variant='h5'>Названия разделов сайта</Typography>
            <Divider sx={{ marginBottom: "30px" }} />
            <Grid container spacing={2} >
                <Grid item xs={4}>
                    <Paper>Телефон 1</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Телефон 2</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>Телефон 3</Paper>
                </Grid>
            </Grid>
        </Box>
    )
}