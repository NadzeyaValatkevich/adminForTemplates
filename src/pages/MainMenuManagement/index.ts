import { MainMenuManagement } from "./MainMenuManagement";
import { slice } from "./mainMenuReducer";

const mainMenuActions = {
    ...slice.actions
};

const mainMenuReducer = slice.reducer;

export {
    MainMenuManagement,
    mainMenuActions,
    mainMenuReducer
}
