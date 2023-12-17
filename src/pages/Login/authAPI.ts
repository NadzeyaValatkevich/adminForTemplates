import { instance } from "../../common/instance/instance";
import { LoginParamsType } from "../../common/types/types";

export const authAPI = {
    login(data: LoginParamsType) {
        return (instance.post<ResponseType>('auth/login', data))
    }
}