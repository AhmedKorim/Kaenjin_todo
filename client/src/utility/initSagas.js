import * as sagas from '../store/sagas';


export const initSagas = sagaMiddleware => {
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))

}
