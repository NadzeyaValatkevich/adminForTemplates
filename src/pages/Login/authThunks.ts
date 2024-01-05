
import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "./authAPI"
import { LoginParamsType } from "../../common/types/types"
import { appCommonActions } from '@/common/commonActions/AppCommonActions';
import { handleAsyncServerNetworkError } from "@/utils/error-utils"

export const login = createAsyncThunk("auth/login", async (param: LoginParamsType, thunkAPI) => {
    
    thunkAPI.dispatch(appCommonActions.setStatus({status:"loading"}))
    try {

        const res = await authAPI.login(param)
        // if(res.status === 204) {
            thunkAPI.dispatch(appCommonActions.setStatus({status:"succeeded"}))
            return 
        // }  
    } catch (error: any) {

        console.log(error)

    return handleAsyncServerNetworkError(error, thunkAPI)
    }
})

export const logout = createAsyncThunk("auth/logout", async (param, thunkAPI) => {
    thunkAPI.dispatch(appCommonActions.setStatus({status:"loading"}))
    try {
        const res = await authAPI.logout()
        // if(res.data.resultCode === 0) {
            // thunkAPI.dispatch(setIsLoggedIn({value: true}))
            thunkAPI.dispatch(appCommonActions.setStatus({status:"succeeded"}))
            return
        // } else {
            // handleServerAppError(res.data, thunkAPI.dispatch)
            // return {isLoggedIn: false}
        // }     
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
        // handleServerNetworkError(error, dispatch)
        // return {isLoggedIn: false}
    }
})

