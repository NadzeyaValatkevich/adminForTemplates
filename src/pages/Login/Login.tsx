import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Paper } from '@mui/material'
import { StylesProvider } from '@material-ui/core';
import { Typography } from '@mui/material'
import styles from "./Login.module.css"
import Box from '@mui/material/Box'

export const Login = () => {
    return (
        // <Grid container justifyContent={'center'}>
        //    <Grid item justifyContent={'center'}>
        <div className={styles.loginBlock}>
            <Paper
                elevation={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '2rem',
                    maxWidth: "400px",
                    width: "100%"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                        backgroundColor: '#366EFF',
                        boxSizing: 'border-box'
                    }}
                >
                    <Typography
                        variant={'h6'}
                        align={'center'}
                        sx={{
                            fontWeight: '400',
                            color: '#fff'
                        }}
                    >
                        Добро пожаловать в систему администрирования сайта
                    </Typography>
                </Box>
                <FormControl sx={{ width: "100%" }} >
                    <FormGroup sx={{ padding: '0 1rem 0 1rem' }}>
                        <TextField fullWidth label="Имя пользователя" margin="normal" variant="standard" />
                        <TextField fullWidth type="password" label="Пароль" variant="standard"
                            margin="normal"
                        />
                        {/* <FormControlLabel label={'Remember me'} control={<Checkbox />} /> */}
                        <Button type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                            sx={{ width: "100px", alignSelf: "center", marginTop: "20px" }}>
                            ВОЙТИ
                        </Button>
                    </FormGroup>
                </FormControl>
            </Paper>
        </div >

    )
}