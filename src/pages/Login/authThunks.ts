
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RequestStatusType } from "../../common/enums/enums"
import { authAPI } from "./authAPI"
import { setIsLoggedIn } from "./authReducer"
import { LoginParamsType } from "../../common/types/types"
import { appCommonActions } from '@/common/commonActions/AppCommonActions';

export const login = createAsyncThunk("auth/login", async (param: LoginParamsType, thunkAPI) => {
    
    thunkAPI.dispatch(appCommonActions.setStatus({status:"loading"}))
    try {

        const res = await authAPI.login(param)
        
        if(res.status === 204) {
            // thunkAPI.dispatch(setIsLoggedIn({value: true}))
            thunkAPI.dispatch(appCommonActions.setStatus({status:"succeeded"}))
            return 
        }    
    } catch (error) {
    return thunkAPI.rejectWithValue(error)
        
        // console.log(error);
        // handleServerNetworkError(error, dispatch)
        // return {isLoggedIn: false}
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

