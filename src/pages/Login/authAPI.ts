import { AuthResponseType, LoginParamsType, LoginResponseType } from "@/common/types/authTypes";
import { instance } from "../../common/instance/instance";
import { FormPasswordValuesType } from "../Info/NewPassword/NewPassword";
import { settings } from './../../common/instance/instance';

export const authAPI = {
    login(data: LoginParamsType) {
        return (instance.post<LoginResponseType>('auth/login', data, 
        {...settings, headers: {...settings.headers, "Content-Type": "application/x-www-form-urlencoded" }} ))
    },
    logout() {
        return(instance.post('auth/logout'))
    },
    me() {
        return (instance.get<AuthResponseType>('users/me'))
    },
    createNewPassword(data: FormPasswordValuesType) {
        return (instance.post('users/change_password', data))
    }
}