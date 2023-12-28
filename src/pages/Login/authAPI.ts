import { instance } from "../../common/instance/instance";
import { HomeResponseType, LoginParamsType } from "@/common/types/types";

export const authAPI = {
    login(data: LoginParamsType) {
        return (instance.post('auth/login', data))
    },
    logout() {
        return(instance.delete(`auth/login`))
    },
    me() {
        return (instance.get<HomeResponseType>('auth/me'))
    }
}