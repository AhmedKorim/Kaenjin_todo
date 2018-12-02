import {SET_MAIN_SCROLL, SET_SECTION_HEIGHT, TOGGLE_NAVIGATION_SIZE, TOGGLE_NAVIGATION_VISIBILITY} from "./actionTypes";

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
export const sectionSizeAction = (sectionSize) => {
    console.log(sectionSize);
    return ({
        type: SET_SECTION_HEIGHT,
        payload: {
            sectionSize
        }
    });
}
export const mainScrollAction = (scroll) => {
    console.log(scroll);
    return ({
        type: SET_MAIN_SCROLL,
        payload: {
            scroll
        }
    });
}
