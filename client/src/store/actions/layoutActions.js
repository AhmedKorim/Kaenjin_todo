import {TOGGLE_NAVIGATION_SIZE, TOGGLE_NAVIGATION_VISIBILITY} from "./actionTypes";

export const sideBarTogglerAction = (sidebarVisible) => ({
    type:TOGGLE_NAVIGATION_VISIBILITY,
    payload:{
        sidebarVisible
    }
})
export const sideBarSizeAction = (sideBarSize) => ({
    type:TOGGLE_NAVIGATION_SIZE,
    payload:{
        sideBarSize
    }
})
