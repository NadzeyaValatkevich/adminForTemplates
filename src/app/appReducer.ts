import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from '@reduxjs/toolkit';
import { RequestStatusType } from "../common/enums/enums";
import { initializeApp } from "./appThunks";

const slice = createSlice({
    name: 'app',
    initialState: {
    error: null as string | null,
    status: RequestStatusType.idle as RequestStatusType,
    isInitialized: false
},
    reducers: {
        setAppError(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error
        },
        setAppStatus(state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        } 
    },

    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state) => {
            state.isInitialized = true
        })
    }
})

export const appReducer = slice.reducer
export const {setAppError, setAppStatus} = slice.actions