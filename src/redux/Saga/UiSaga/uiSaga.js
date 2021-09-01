import {put} from "redux-saga/effects";
import {actionName} from "../../Reducers/reducer";

export function* workerSagaSetCurrentPage(action) {
    yield put({type: actionName.SET_CURRENT_PAGE, payload: action.args})
}
