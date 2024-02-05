import { instance } from "@/common/instance/instance"
import { MainMenuItemsType } from "@/common/types/mainMenuTypes"

export const mainMenuAPI = {
    getMenuItems() {
        return (instance.get<MainMenuItemsType>('menuadmin/'))
    }    
}