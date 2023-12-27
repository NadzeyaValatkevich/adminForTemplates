
import { createAsyncThunk } from "@reduxjs/toolkit"
import { setAppStatus } from "../../app/appReducer"
import { RequestStatusType } from "../../common/enums/enums"
import { authAPI } from "./authAPI"
import { setIsLoggedIn } from "./authReducer"
import { LoginParamsType } from "../../common/types/types"

export const login = createAsyncThunk("auth/login", async (param: LoginParamsType, thunkAPI) => {
    
    thunkAPI.dispatch(setAppStatus({status:RequestStatusType.loading}))
    try {
        const res = await authAPI.login(param)

        // console.log(res);
        
        // if(res.data.resultCode === 0) {
            thunkAPI.dispatch(setIsLoggedIn({value: true}))
            thunkAPI.dispatch(setAppStatus({status:RequestStatusType.succeeded}))
            return 
        // } else {
            // handleServerAppError(res.data, thunkAPI.dispatch)
            // return {isLoggedIn: false}
        // }     
    } catch (error) {
        // console.log(error);
        // handleServerNetworkError(error, dispatch)
        return {isLoggedIn: false}
    }
})

export const logout = createAsyncThunk("auth/logout", async (param, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status:RequestStatusType.loading}))
    try {
        const res = await authAPI.logout()
        // if(res.data.resultCode === 0) {
            thunkAPI.dispatch(setIsLoggedIn({value: true}))
            thunkAPI.dispatch(setAppStatus({status:RequestStatusType.succeeded}))
            return
        // } else {
            // handleServerAppError(res.data, thunkAPI.dispatch)
            // return {isLoggedIn: false}
        // }     
    } catch (error) {
        // handleServerNetworkError(error, dispatch)
        // return {isLoggedIn: false}
    }
})

