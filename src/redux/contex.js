import {applyMiddleware, createStore} from "redux";
import {character_reducer} from "./Reducers/character_reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(character_reducer, composeWithDevTools(applyMiddleware(thunk)))



