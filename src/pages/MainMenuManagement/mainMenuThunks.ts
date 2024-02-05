import { appCommonActions } from "@/common/commonActions/AppCommonActions";
import { MainMenuItemsType } from "@/common/types/mainMenuTypes";
import { RequestStatusType } from "@/utils/enums/enums";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainMenuAPI } from "./mainMenuAPI";
import { handleAsyncServerNetworkError } from "@/utils/error-utils";
import { setMainMenuItems } from "./mainMenuReducer";

export const fetchMainMenuItems = createAsyncThunk<{mainMenuItems: MainMenuItemsType}, undefined>("menuadmin", async (param, ThunkAPI) => {
    
    ThunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.loading}))
    try {

        const res = await mainMenuAPI.getMenuItems()
        ThunkAPI.dispatch(setMainMenuItems(res.data))
        ThunkAPI.dispatch(appCommonActions.setStatus({status: RequestStatusType.succeeded}))
        return {mainMenuItems: res.data}
        
    } catch (error: any) {
        return handleAsyncServerNetworkError(error, ThunkAPI)
    }
});