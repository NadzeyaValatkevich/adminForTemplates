import * as appThunks from "./appThunks";
import {slice} from "./appReducer";

const appReducer = slice.reducer;
const appActions = slice.actions;

export {
    appReducer,
    appThunks,
    appActions
}