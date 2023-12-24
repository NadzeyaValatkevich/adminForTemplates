import * as authThunks from "./authThunks";
import {Login} from "./Login";
import {slice} from "./authReducer";

const authActions = {
    ...slice.actions
}

export {
    authThunks,
    authActions,
    Login
}