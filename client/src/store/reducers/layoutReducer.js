import {SET_MAIN_SCROLL, SET_SECTION_HEIGHT, TOGGLE_NAVIGATION_SIZE, TOGGLE_NAVIGATION_VISIBILITY} from "../actions/actionTypes";

const initialState = {
    sidebarVisible: false,
    headerHeight: null,
    sideBarSize: false,
    sectionSize:0,
    scroll:0
};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAVIGATION_VISIBILITY:
            return {
                ...state,
                sidebarVisible: action.payload.sidebarVisible
            }
        case TOGGLE_NAVIGATION_SIZE:
            return {
                ...state,
                sideBarSize: action.payload.sideBarSize
            }
            case SET_SECTION_HEIGHT:
            return {
                ...state,
                sectionSize: action.payload.sectionSize
            }
        case SET_MAIN_SCROLL:
            return {
                ...state,
                scroll:action.payload.scroll
            }
        default :
            return {
                ...state
            }
    }

}
export default layoutReducer;
