import {TOGGLE_NAVIGATION_VISIBILITY} from "./actionTypes";

export const sideBarTogglerAction = (sidebarVisible) => ({
    type:TOGGLE_NAVIGATION_VISIBILITY,
    payload:{
        sidebarVisible
    }
})
