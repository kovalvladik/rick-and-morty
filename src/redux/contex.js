import {applyMiddleware, createStore} from "redux";
import {reducer} from "./Reducers/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./Saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)