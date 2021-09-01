import {takeEvery,call,put,fork} from 'redux-saga/effects'
import axiosCharacters from "../AsyncActions/characters";


export function* workerSagaGetAllCharacters(action){
    const date = yield call(axiosCharacters, action.args)
    yield put ({type:'GET_CHARACTER', payload: date.results })
    yield put ({type:'GET_INFO', payload: date.info })

}export function* workerSagaSetCurrentPage(action){
    yield put ({type:'SET_CURRENT_PAGE', payload: action.args })
}

export function* watcherSaga(){
        yield takeEvery('LOAD_CHARACTER',workerSagaGetAllCharacters)
        yield takeEvery('NEW_PAGE',workerSagaSetCurrentPage)
}

export default function* rootSaga(){
    console.log('saga 2')
    yield fork(watcherSaga)
}