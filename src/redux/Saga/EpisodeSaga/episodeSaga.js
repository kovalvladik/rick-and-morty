import {call, put} from "redux-saga/effects";
import axiosSingleEpisode from "../../AsyncActions/singleEpisode";
import {actionName} from "../../Reducers/reducer";
import axiosEpisode from "../../AsyncActions/episode";

export function* workerSagaGetSingleEpisode(action) {
    const date = yield call(axiosSingleEpisode, action.args)
    yield put({type: actionName.GET_SINGLE_EPISODE, payload: date})
}

export function* workerSagaGetAllEpisode(action) {
    const date = yield call(axiosEpisode, action.args)
    yield put({type: actionName.GET_EPISODE, payload: date.results})
    yield put({type: actionName.GET_INFO, payload: date.info})

}
