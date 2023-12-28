import { createAsyncThunk } from "@reduxjs/toolkit"
import { RequestStatusType } from "../common/enums/enums"
import { authAPI } from "../pages/Login/authAPI"
import { setIsLoggedIn } from "../pages/Login/authReducer"
import { setAppInitialized, setAppStatus } from "./appReducer"
import { AppThunk } from "./store"

export const initializeApp = createAsyncThunk("app/initializeApp", async (param, {dispatch}) => {
    
        const res = await authAPI.me()

        // if(res.data.resultCode === 0) {
           
             dispatch(setIsLoggedIn({value: true}))    
        // }   
})

