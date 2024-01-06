import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "../pages/Login/authAPI"
import { appActions } from "."
import { setIsLoggedIn } from "@/pages/Login/authReducer"

export const initializeApp = createAsyncThunk("app/initializeApp", async (param, {dispatch}) => {
    
         try{
                const res = await authAPI.me()
                if (res.data.is_active) {
        dispatch(setIsLoggedIn({value: true}))
        dispatch(appActions.setIsSuperUser({is_superuser: res.data.is_superuser}))
}

        } catch(error: any) {
                console.log(error)
        } finally {
                dispatch(appActions.setAppInitialized({isInitialized: true}))
        }
         
})

