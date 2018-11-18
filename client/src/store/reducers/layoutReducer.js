import {TOGGLE_NAVIGATION_SIZE, TOGGLE_NAVIGATION_VISIBILITY} from "../actions/actionTypes";

const initialState = {
    sidebarVisible: false,
    headerHeight: null,
    sideBarSize: false,
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
        default :
            return {
                ...state
            }
    }

}
export default layoutReducer;
