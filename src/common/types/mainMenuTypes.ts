import { MenuItemsTypes } from "@/utils/enums/enums"

export type MainMenuItemType = {
  title: string,
  display: boolean
 }

export type MainMenuItemsType = {
[MenuItemsTypes.HOME]: MainMenuItemType,
[MenuItemsTypes.ABOUT]: MainMenuItemType,
[MenuItemsTypes.HOUSES]: MainMenuItemType,
[MenuItemsTypes.KITCHEN]: MainMenuItemType,
[MenuItemsTypes.ENTERTAINMENTS]: MainMenuItemType,
[MenuItemsTypes.NEARESTS]: MainMenuItemType,
[MenuItemsTypes.SPECIAL]: MainMenuItemType,
[MenuItemsTypes.RULES]: MainMenuItemType,
[MenuItemsTypes.GALLERY]: MainMenuItemType,
[MenuItemsTypes.CONTACTS]: MainMenuItemType,
}