import { TextFieldComponent } from "@/components/TextFieldComponent";
import styles from "./NewPassword.module.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FormContainer, PasswordElement, SubmitHandler } from 'react-hook-form-mui';
import FormGroup from '@mui/material/FormGroup';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { createNewPassword } from "@/pages/Login/authThunks";

export type FormPasswordValuesType = {
    current_password: string,
    new_password: string,
    new_password_confirm: string,
};

export const NewPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSuccessHandler: SubmitHandler<FormPasswordValuesType> = async (data: FormPasswordValuesType) => {
        console.log(data)
        await dispatch(createNewPassword(data))
        navigate('/login')
    }

    return (
        <div className={styles.blockNewPassword}>
            <Box sx={{ width: "100%" }}>
                <FormContainer<{ password: string }> onSuccess={onSuccessHandler}>
                    <FormGroup sx={{ padding: '0 1rem 0 1rem', width: "100%", boxSizing: "border-box" }}>
                        <PasswordElement
                            required
                            helperText={"Введите старый пароль"}
                            // type={'password'}
                            margin={'dense'}
                            name={'current_password'}
                            variant={'outlined'}
                            size={"small"}
                        />
                        <PasswordElement
                            required
                            helperText={"Введите новый пароль"}
                            type={'password'}
                            margin={'dense'}
                            name={'new_password'}
                            variant={'outlined'}
                            size={"small"}
                        />
                        <PasswordElement
                            required
                            helperText={"Подтвердите новый пароль"}
                            type={'password'}
                            margin={'dense'}
                            name={'new_password_confirm'}
                            variant={'outlined'}
                            size={"small"}
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
        </div>
    )
}