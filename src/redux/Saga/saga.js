import {takeEvery,call,put,fork} from 'redux-saga/effects'
import axiosCharacters from "../AsyncActions/characters";
import axiosEpisode from "../AsyncActions/episode";
import axiosLocation from "../AsyncActions/location";
import {actionName} from "../Reducers/reducer";

export function* workerSagaGetAllCharacters(action){
    const date = yield call(axiosCharacters, action.args)
    yield put ({type:actionName.GET_CHARACTER, payload: date.results })
    yield put ({type:actionName.GET_INFO, payload: date.info })

}
export function* workerSagaGetSingleCharacter(action){
    const date = yield call(axiosCharacters, action.args)
    yield put ({type:actionName.GET_SINGLE_CHARACTER, payload: date.results })

}
export function* workerSagaGetSingleEpisode(action){
    const date = yield call(axiosCharacters, action.args)
    yield put ({type:actionName.GET_SINGLE_EPISODE, payload: date.results })

}
export function* workerSagaGetSingleLocation(action){
    const date = yield call(axiosCharacters, action.args)
    yield put ({type:actionName.GET_SINGLE_LOCATION, payload: date.results })

}
export function* workerSagaGetAllEpisode(action){
    const date = yield call(axiosEpisode, action.args)
    yield put ({type:actionName.GET_EPISODE, payload: date.results })
    yield put ({type:actionName.GET_INFO, payload: date.info })

}
export function* workerSagaGetAllLocation(action){
    const date = yield call(axiosLocation, action.args)
    yield put ({type:actionName.GET_LOCATION, payload: date.results })
    yield put ({type:actionName.GET_INFO, payload: date.info })

}
export function* workerSagaSetCurrentPage(action){
    yield put ({type:actionName.SET_CURRENT_PAGE, payload: action.args })
}

export function* watcherSaga(){
        yield takeEvery('LOAD_CHARACTER',workerSagaGetAllCharacters)
        yield takeEvery('LOAD_EPISODE',workerSagaGetAllEpisode)
        yield takeEvery('LOAD_LOCATION',workerSagaGetAllLocation)
        yield takeEvery('LOAD_SINGLE_CHARACTER',workerSagaGetSingleCharacter)
        yield takeEvery('LOAD_SINGLE_EPISODE',workerSagaGetSingleEpisode)
        yield takeEvery('LOAD_SINGLE_LOCATION',workerSagaGetSingleLocation)

        yield takeEvery('NEW_PAGE',workerSagaSetCurrentPage)
}

export default function* rootSaga(){
    yield fork(watcherSaga)
}