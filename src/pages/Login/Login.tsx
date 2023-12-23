import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material'
import { Typography } from '@mui/material'
import styles from "./Login.module.css"
import Box from '@mui/material/Box';
import { FormContainer, PasswordElement, SubmitHandler, TextFieldElement } from 'react-hook-form-mui';
import { useActions } from '../../common/hooks/useActions';
import { authThunks } from '.';

type FormValuesType = {
    login: string
    password: string
};

export const Login = () => {
    const { login, logout } = useActions(authThunks)

    const onSuccessHandler: SubmitHandler<FormValuesType> = async (data: FormValuesType) => {
        await login(data)
    }

    // const onSuccessHandler: SubmitHandler<FormValuesType> = data => {
    //     alert(data)
    // }


    return (
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
                <Box sx={{ width: "100%" }}>
                    <FormContainer<FormValuesType> onSuccess={onSuccessHandler}>
                        <FormGroup sx={{ padding: '0 1rem 0 1rem', width: "100%", boxSizing: "border-box" }}>

                            <TextFieldElement
                                type={'login'}
                                margin={'dense'}
                                label={'Login'}
                                name={'login'}
                                variant={'standard'}
                                // autoComplete={'username'}
                                fullWidth
                            />
                            <PasswordElement
                                type={'text'}
                                margin={'dense'}
                                label={'Password'}
                                name={'password'}
                                variant={'standard'}
                                // autoComplete={'current-password'}
                                fullWidth
                            />
                            <Button type={'submit'}
                                variant={'contained'}
                                color={'primary'}
                                sx={{ width: "100px", alignSelf: "center", marginTop: "20px" }}>
                                ВОЙТИ
                            </Button>
                        </FormGroup>

                    </FormContainer>
                </Box>
                {/* </form> */}
            </Paper>
        </div >

    )
}

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
