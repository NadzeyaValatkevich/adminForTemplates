import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormContainer, PasswordElement, SubmitHandler, PasswordRepeatElement } from 'react-hook-form-mui';
import FormGroup from '@mui/material/FormGroup';
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { createNewPassword } from "@/pages/Login/authThunks";
import { Typography } from '@mui/material'


export type FormPasswordValuesType = {
    current_password: string,
    new_password: string,
    new_password_confirm: string,
};

export const NewPassword = () => {
    const dispatch = useAppDispatch();

    const passwordValidation = {
        validate: (value: string) => {
            if (! /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g.test(value)) {
                return 'Пароль не соответствует рекомендациям, указанным в подсказке'
            }
            return true
        },
    };

    const onSuccessHandler: SubmitHandler<FormPasswordValuesType> = async (data: FormPasswordValuesType) => {
        console.log(data)
        await dispatch(createNewPassword(data))
    };

    return (
        // <div className={styles.blockNewPassword}>
        <Box sx={{ width: "100%" }}>
            <FormContainer<FormPasswordValuesType> onSuccess={onSuccessHandler}>
                <FormGroup sx={{ padding: '50px 10px 10px 50px', width: "50%", boxSizing: "border-box" }}>
                    <PasswordElement
                        required
                        placeholder={"Введите старый пароль*"}
                        margin={'dense'}
                        name={'current_password'}
                        variant={'outlined'}
                        size={"small"}
                        fullWidth={true}
                    />
                    <PasswordElement
                        required
                        placeholder={"Введите новый пароль*"}
                        type={'password'}
                        margin={'dense'}
                        name={'new_password'}
                        variant={'outlined'}
                        size={"small"}
                        fullWidth={true}
                        validation={passwordValidation}
                    />
                    <Typography> Пароль должен содержать минимум 8 символов: латинские буквы в верхнем и нижнем регистре,
                        минимум 1 цифра, спецсимволы допускаются.</Typography>
                    <PasswordRepeatElement
                        required
                        placeholder={"Подтвердите новый пароль*"}
                        passwordFieldName="new_password"
                        type={'password'}
                        margin={'dense'}
                        name={'new_password_confirm'}
                        variant={'outlined'}
                        size={"small"}
                        fullWidth={true}
                        customInvalidFieldMessage={"Пароль должен совпадать"}
                    />
                    <Button type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        sx={{ width: "222px", alignSelf: "center", marginTop: "20px" }}>
                        ИЗМЕНИТЬ ПАРОЛЬ
                    </Button>
                </FormGroup>

            </FormContainer>
        </Box>
        // </div>
    )
}