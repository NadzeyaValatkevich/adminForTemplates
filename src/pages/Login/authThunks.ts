import { AppThunk } from "../../app/store"
import { RequestStatusType } from "../../common/enums/enums"
import { LoginParamsType } from "../../common/types/types"
import { authAPI } from "./authAPI"
import { setIsLoggedIn } from "./authReducer"

export const login = (data: LoginParamsType): AppThunk => async dispatch => {
    dispatch(setAppStatus(RequestStatusType.loading))
    try {
        const res = await authAPI.login(data)

        dispatch(setIsLoggedIn({value: true}))
        dispatch(setAppStatus(RequestStatusType.succeeded)) 
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }
}