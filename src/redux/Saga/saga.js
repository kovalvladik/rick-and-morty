import {takeEvery,call,put,fork} from 'redux-saga/effects'
import {axiosCharacters} from "../AsyncActions/characters";
import {instance} from "../../axois";
import {reducer} from "../Reducers/reducer";

 async function aa(currentPage, params){

  const results =await instance.get(`/character`,{
      params: {
          page: currentPage,
          name: params,

      }})
     console.log(results.data.results)
     return results.data
}


export function* workerSaga(action){
    console.log(action)
    const dtate = yield call(aa, action.args)
     console.log('saga 4')
     console.log(dtate)
    yield put ({type:'GET_CHARACTER', payload: dtate.results })
    yield put ({type:'GET_INFO', payload: dtate.info })
    console.log('saga 4')


}export function* workerSaga2(action){

    yield put ({type:'SET_CURRENT_PAGE', payload: action.args })



}

export function* watcherSaga(){
        yield takeEvery('LOAD_CHARACTER',workerSaga)
        yield takeEvery('NEW_PAGE',workerSaga2)
}

export default function* rootSaga(){
    console.log('saga 2')

    yield fork(watcherSaga)
}