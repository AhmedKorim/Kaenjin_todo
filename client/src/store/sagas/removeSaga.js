import {put, take, takeEvery, cancel, cancelled, takeLatest} from 'redux-saga/effects';
import {REMOVE_ALL, REMOVE_SELECTED} from "../actions/actionTypes";
import {delay} from 'redux-saga'

export function* handleRemoveal() {
    try {
        console.log('forked');
        yield delay(500)
        console.log('done 1');
        console.log('done 2');
    } finally {
        let isCancelled = yield cancelled();
        console.log(isCancelled);
        isCancelled = yield cancelled();
        console.log(isCancelled);

    }


}

export function* remove() {
    const process = yield takeLatest(REMOVE_ALL, handleRemoveal);
}
