import {takeLatest, put, select} from 'redux-saga/effects'
import {HANDLE_HEADER_HEIGHT, HANDLE_NAVIGATION_VISIBILITY, TOGGLE_NAVIGATION_VISIBILITY} from "../actions/actionTypes";
import {sideBarTogglerAction} from "../actions/layoutActions";
import {sideBarSelector} from "../selectors/layoutSelectors";

export function* headerHandler(headerProcess) {

}

export function* sideBarHandler() {
    const sideBarState = yield select(sideBarSelector);
    console.log(sideBarState);
    yield put(sideBarTogglerAction(!sideBarState));
}

export function* layoutSaga() {
    const sidebarProcess = yield takeLatest(HANDLE_NAVIGATION_VISIBILITY, sideBarHandler)
    const headerProcess = yield takeLatest(HANDLE_HEADER_HEIGHT, headerHandler)
}
