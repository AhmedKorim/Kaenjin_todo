import {put, select, takeLatest} from 'redux-saga/effects'
import {HANDLE_HEADER_HEIGHT, HANDLE_NAVIGATION_SIZE, HANDLE_NAVIGATION_VISIBILITY, HANDLE_SECTION_SIZE} from "../actions/actionTypes";
import {sectionSizeAction, sideBarSizeAction, sideBarTogglerAction} from "../actions/layoutActions";
import {miniSideBarSelector, sectionHeightSelector, sideBarSelector} from "../selectors/layoutSelectors";

export function* headerHandler(headerProcess) {

}


export function* sideBarHandler() {
    const sideBarState = yield select(sideBarSelector);
    console.log(sideBarState);
    yield put(sideBarTogglerAction(!sideBarState));
}

export function* handleSidebarSize() {
    const sideBarSize = yield select(miniSideBarSelector);
    yield put(sideBarSizeAction(!sideBarSize));

}

export function* handleSectionSize({sectionSize}) {
    yield put(sectionSizeAction(sectionSize));
}

export function* layoutSaga() {
    const sidebarProcess = yield takeLatest(HANDLE_NAVIGATION_VISIBILITY, sideBarHandler)
    const headerProcess = yield takeLatest(HANDLE_HEADER_HEIGHT, headerHandler)
    const sidebarSizeProcess = yield takeLatest(HANDLE_NAVIGATION_SIZE, handleSidebarSize)
    yield takeLatest(HANDLE_SECTION_SIZE, handleSectionSize)
}
