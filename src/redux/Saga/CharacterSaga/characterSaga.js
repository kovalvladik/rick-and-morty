import {call, put} from "redux-saga/effects";
import axiosCharacters from "../../AsyncActions/characters";
import {actionName} from "../../Reducers/reducer";
import axiosSingleCharacter from "../../AsyncActions/singleCharacter";

export function* workerSagaGetAllCharacters(action) {
    const date = yield call(axiosCharacters, action.args)
    yield put({type: actionName.GET_CHARACTER, payload: date.results})
    yield put({type: actionName.GET_INFO, payload: date.info})
}

export function* workerSagaGetSingleCharacter(action) {
    const date = yield call(axiosSingleCharacter, action.args)
    console.log(date)
    yield put({type: actionName.GET_SINGLE_CHARACTER, payload: date})
}
