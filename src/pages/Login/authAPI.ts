import { instance } from "../../common/instance/instance";
import { LoginParamsType } from "../../common/types/types";

export type HomeStateType = typeof initialState

const initialState = {
    _id: null as string | null,
  email: null as string | null,
  name: null as string | null,
  isAdmin: null as boolean | null,
  rememberMe: null as boolean | null,
  error: null as string | null,
  __v: null as number | null,
  token: null as string | null,
  tokenDeathTime: null as number | null,
}

export const authAPI = {
    login(data: LoginParamsType) {
        return (instance.post<ResponseType>('/auth/login', data))
    },
    logout() {
        return(instance.delete<ResponseType>(`auth/login`))
    },
    me() {
        return (instance.post<HomeStateType>('auth/me'))
    }
}