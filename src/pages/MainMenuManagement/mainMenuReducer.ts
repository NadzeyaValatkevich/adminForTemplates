import { MainMenuItemsType } from "@/common/types/mainMenuTypes"
import { MenuItemsTypes } from "@/utils/enums/enums"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type MainMenuState = {
    mainMenuItems: MainMenuItemsType
}

const mainMenuItem = {
    title: "",
    display: true
}

const initialState: MainMenuState = {
    mainMenuItems: {
[MenuItemsTypes.HOME]: mainMenuItem,
[MenuItemsTypes.ABOUT]: mainMenuItem,
[MenuItemsTypes.HOUSES]: mainMenuItem,
[MenuItemsTypes.KITCHEN]: mainMenuItem,
[MenuItemsTypes.ENTERTAINMENTS]: mainMenuItem,
[MenuItemsTypes.NEARESTS]: mainMenuItem,
[MenuItemsTypes.SPECIAL]: mainMenuItem,
[MenuItemsTypes.RULES]: mainMenuItem,
[MenuItemsTypes.GALLERY]: mainMenuItem,
[MenuItemsTypes.CONTACTS]: mainMenuItem,
    }
}

export const slice = createSlice({
    name: 'mainMenu',
    initialState,
    reducers: {
        
setMainMenuItems(state, action: PayloadAction<MainMenuItemsType>) {
    state.mainMenuItems = action.payload
},
changeMainMenuTitle(state, action) {
    console.log('Hello')
    console.log(action.payload.title)
    let key  
    for(const i in state.mainMenuItems) {
        if (i === action.payload.keyItem) {
          key = i
        }
    }
     
     state.mainMenuItems[key].title = action.payload.title
}
    },
    
});

export const {setMainMenuItems, changeMainMenuTitle} = slice.actions