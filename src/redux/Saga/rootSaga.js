import {takeEvery, call, put, fork, spawn} from 'redux-saga/effects'
import {workerSagaGetAllEpisode, workerSagaGetSingleEpisode} from "./EpisodeSaga/episodeSaga";
import {workerSagaGetAllCharacters, workerSagaGetSingleCharacter} from "./CharacterSaga/characterSaga";
import {workerSagaGetAllLocation, workerSagaGetSingleLocation} from "./LocationSaga/locationSaga";
import {workerSagaSetCurrentPage} from "./UiSaga/uiSaga";

export function* watcherSagaEpisode() {
    yield takeEvery('LOAD_EPISODE', workerSagaGetAllEpisode)
    yield takeEvery('LOAD_SINGLE_EPISODE', workerSagaGetSingleEpisode)
}
export function* watcherSagaCharacter(){
    yield takeEvery('LOAD_CHARACTER', workerSagaGetAllCharacters)
    yield takeEvery('LOAD_SINGLE_CHARACTER', workerSagaGetSingleCharacter)

}
export function* watcherSagaLocation(){
    yield takeEvery('LOAD_LOCATION', workerSagaGetAllLocation)
    yield takeEvery('LOAD_SINGLE_LOCATION', workerSagaGetSingleLocation)

}
export function* watcherSagaAllUi() {
    yield takeEvery('NEW_PAGE', workerSagaSetCurrentPage)

}


export default function* rootSaga() {
    yield spawn(watcherSagaEpisode)
    yield spawn(watcherSagaLocation)
    yield spawn(watcherSagaCharacter)
    yield spawn(watcherSagaAllUi)
}