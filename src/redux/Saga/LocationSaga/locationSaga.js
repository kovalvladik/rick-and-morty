import {call, put} from "redux-saga/effects";
import axiosSingleLocation from "../../AsyncActions/singleLocation";
import {actionName} from "../../Reducers/reducer";
import axiosLocation from "../../AsyncActions/location";

export function* workerSagaGetSingleLocation(action) {
    const date = yield call(axiosSingleLocation, action.args)
    yield put({type: actionName.GET_SINGLE_LOCATION, payload: date})
}


export function* workerSagaGetAllLocation(action) {
    const date = yield call(axiosLocation, action.args)
    yield put({type: actionName.GET_LOCATION, payload: date.results})
    yield put({type: actionName.GET_INFO, payload: date.info})

}