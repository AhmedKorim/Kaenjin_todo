import {TOGGLE_NAVIGATION_VISIBILITY} from "../actions/actionTypes";

const initialState = {
    sidebarVisible: false,
    headerHeight: null,

};

const layoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAVIGATION_VISIBILITY:
            return {
                ...state,
                sidebarVisible: action.payload.sidebarVisible
            }
        default :
            return {
                ...state
            }
    }

}
export default layoutReducer;
