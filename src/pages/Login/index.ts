import * as authThunks from "./authThunks";
import {Login} from "./Login";
import {slice} from "./authReducer";

const authActions = {
    ...slice.actions
}

const authReducer = slice.reducer;

export {
    authReducer,
    authThunks,
    authActions,
    Login
}