import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "../pages/Login/authAPI"
import { appActions } from "."
import { setIsLoggedIn } from "@/pages/Login/authReducer"
import { RequestStatusType } from "@/common/enums/enums"
import { appCommonActions } from "@/common/commonActions/AppCommonActions"
import { handleAsyncServerNetworkError } from "@/utils/error-utils"

export const initializeApp = createAsyncThunk("app/initializeApp", async (param, thunkAPI) => {
    thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.loading}))

         try{
                const res = await authAPI.me()
                if (res.status === 200) {
        thunkAPI.dispatch(setIsLoggedIn({value: true}))
        thunkAPI.dispatch(appActions.setIsSuperUser({is_superuser: res.data.is_superuser}))
        thunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.succeeded}))
}

        } catch(error: any) {
                 handleAsyncServerNetworkError(error, thunkAPI)
                // console.log(error)
        } finally {
                thunkAPI.dispatch(appActions.setAppInitialized({isInitialized: true}))
        }
         
})

