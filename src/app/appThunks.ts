import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "../pages/Login/authAPI"
import { setIsLoggedIn } from "../pages/Login/authReducer"
import { appActions } from "."

export const initializeApp = createAsyncThunk("app/initializeApp", async (param, {dispatch}) => {
    
         try{
                const res = await authAPI.me()
                if (res.data.is_active) {
        dispatch(setIsLoggedIn({value: true}))
}

        } catch(error: any) {

        } finally {
                dispatch(appActions.setAppInitialized({isInitialized: true}))
        }
         
})

