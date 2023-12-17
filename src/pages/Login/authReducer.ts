import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
setIsLoggedIn(state, action: PayloadAction<{value: boolean}>) {
    state.isLoggedIn = action.payload.value
}
    }
    
})

export const authReducer = slice.reducer
export const {setIsLoggedIn} = slice.actions
