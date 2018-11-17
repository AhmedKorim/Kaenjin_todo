import {REMOVE_SELECTED} from "../actions/actionTypes";
import {take} from 'redux-saga/effects';

export function* currentUserSaga() {
    const removeAll = yield take(REMOVE_SELECTED)
    console.log(removeAll);
}
