import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from '@reduxjs/toolkit';
import { initializeApp } from "./appThunks";
import { appCommonActions } from "@/common/commonActions/AppCommonActions";

 export const slice = createSlice({
    name: 'app',
    initialState: {
    error: null as string | null,
    status: 'idle',
    isInitialized: false,
    is_superuser: false
},
    reducers: {
        setAppInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized
        },
        setIsSuperUser(state, action: PayloadAction<{ is_superuser: boolean }>) {
            state.is_superuser = action.payload.is_superuser
        }
    },

    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            state.isInitialized = true;
            // state.is_superuser = action.payload.is_superuser
        }),
        builder.addCase(appCommonActions.setStatus, (state, action) => {
            state.status = action.payload.status
        }),
        builder.addCase(appCommonActions.setError, (state, action) => {
            state.error = action.payload.error
        })
    }
})
