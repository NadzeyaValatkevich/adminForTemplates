
import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "./authAPI"
import { LoginParamsType } from "../../common/types/types"
import { appCommonActions } from '@/common/commonActions/AppCommonActions';
import { handleAsyncServerNetworkError } from "@/utils/error-utils"
import { initializeApp } from "@/app/appThunks";
import { FormPasswordValuesType } from "../Info/NewPassword/NewPassword";
import { RequestStatusType } from "@/common/enums/enums";

export const login = createAsyncThunk("auth/login", async (param: LoginParamsType, thunkAPI) => {
    
    thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.loading}))
    try {

        const res = await authAPI.login(param)
        // if(res.status === 204) {
            thunkAPI.dispatch(initializeApp())
            thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.succeeded}))
            return 
        // }  
    } catch (error: any) {
        return handleAsyncServerNetworkError(error, thunkAPI)
    }
});

export const logout = createAsyncThunk("auth/logout", async (param, thunkAPI) => {
    thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.loading}))
    try {
        const res = await authAPI.logout()
            thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.succeeded}))
            return   
    } catch (error: any) {
        handleAsyncServerNetworkError(error, thunkAPI)
        // return thunkAPI.rejectWithValue(error)
        
    }
});

export const createNewPassword = createAsyncThunk("users/change_password", async (param: FormPasswordValuesType, thunkAPI) => {
    thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.loading}))
    
    try {
        const res = await authAPI.createNewPassword(param)

        if(res.status === 200) {
            thunkAPI.dispatch(appCommonActions.setInfo({info: res.data.status}))
        }

        thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.succeeded}))

        return
    } catch (error: any) {
        handleAsyncServerNetworkError(error, thunkAPI)
    }
})



