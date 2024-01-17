import { TextFieldComponent } from "@/components/TextFieldComponent";
import styles from "./NewPassword.module.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormContainer, PasswordElement, SubmitHandler } from 'react-hook-form-mui';
import FormGroup from '@mui/material/FormGroup';

type FormPasswordValuesType = {
    password: string
};

export const NewPassword = () => {

    const onSuccessHandler: SubmitHandler<FormPasswordValuesType> = async (data: FormPasswordValuesType) => {
        // await dispatch(authThunks.login(data))
    }

    return (
        <div className={styles.blockNewPassword}>
            <Box sx={{ width: "100%" }}>
                <FormContainer<FormPasswordValuesType> onSuccess={onSuccessHandler}>
                    <FormGroup sx={{ padding: '0 1rem 0 1rem', width: "100%", boxSizing: "border-box" }}>
                        <PasswordElement
                            required
                            helperText={"hello"}
                            type={'password'}
                            margin={'dense'}
                            label={'Password'}
                            name={'password'}
                            variant={'standard'}
                            fullWidth
                        />
                        <TextFieldComponent helperText={"Введите старый пароль"} />
                        <TextFieldComponent helperText={"Введите новый пароль"} />
                        <TextFieldComponent helperText={"Подтвердите новый пароль"} />
                        <Button type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                            sx={{ width: "222px", alignSelf: "center", marginTop: "20px" }}>
                            ИЗМЕНИТЬ ПАРОЛЬ
                        </Button>
                    </FormGroup>

                </FormContainer>
            </Box>
        </div>
    )
}