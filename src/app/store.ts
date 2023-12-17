import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    // app: appReducer,
    // auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, any>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
AppRootStateType,
unknown,
// AllActionsType
any
>