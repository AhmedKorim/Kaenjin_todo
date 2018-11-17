import {applyMiddleware, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import createSageMiddleware from 'redux-saga';
import {initSagas} from "../utility/initSagas";
import rootReducer from './reducers';

const sagaMiddleware = createSageMiddleware();
const middlewares = [thunk, sagaMiddleware];
const state = {};

export default () => {
    const store = createStore(rootReducer,
        state,
        compose(applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
    )
    initSagas(sagaMiddleware);
    return store
}
