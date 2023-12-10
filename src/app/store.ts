import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})