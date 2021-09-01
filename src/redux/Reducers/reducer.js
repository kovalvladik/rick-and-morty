const defaultState = {
    character: [],
    singleCharacter: [],
    singleLocation: [],
    singleEpisode: [],
    episode: [],
    location: [],
    info: {},
    currentPage: +1,
    params: '',
    name: '',
    like: [{id:1,name:'',}],
    loading: false,

}
export  const actionName = {
    GET_CHARACTER :"GET_CHARACTER",
   GET_SINGLE_CHARACTER : "GET_SINGLE_CHARACTER",
   GET_EPISODE : "GET_EPISODE",
   GET_SINGLE_EPISODE : "GET_SINGLE_EPISODE",
 GET_LOCATION : "GET_LOCATION",
   GET_SINGLE_LOCATION : "GET_SINGLE_LOCATION",
   GET_INFO : "GET_INFO",
    SET_CURRENT_PAGE : "SET_CURRENT_PAGE",
   SET_PARAMS : "SET_PARAMS",
  SET_NAME : "SET_NAME",
     ADD_LIKE : "ADD_LIKE",
    REMOVE_LIKE :"REMOVE_LIKE",
     LOADING_TRUE : 'LOADING_TRUE',
     LOADING_FALSE : 'LOADING_FALSE',
}
// const GET_CHARACTER = "GET_CHARACTER"
// export  const GET_SINGLE_CHARACTER = "GET_SINGLE_CHARACTER"
// export const GET_EPISODE = "GET_EPISODE"
// export const GET_SINGLE_EPISODE = "GET_SINGLE_EPISODE"
// export const GET_LOCATION = "GET_LOCATION"
// export const GET_SINGLE_LOCATION = "GET_SINGLE_LOCATION"
// const GET_INFO = "GET_INFO"
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
// export const SET_PARAMS = "SET_PARAMS"
// export const SET_NAME = "SET_NAME"
// export const ADD_LIKE = "ADD_LIKE"
// export const REMOVE_LIKE = "REMOVE_LIKE"
// export const LOADING_TRUE = 'LOADING_TRUE'
// export const LOADING_FALSE = 'LOADING_FALSE'

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionName.LOADING_FALSE:
            return {
                ...state,
                loading: false
            }
        case actionName.LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case actionName.REMOVE_LIKE:
            return {
                ...state,
                like: state.like.filter(action.payload.id === state.like.id)
            }

        case actionName.ADD_LIKE:
            return {
                ...state,
                like: state.like + action.payload
            }
        case actionName.GET_SINGLE_EPISODE:
            return {
                ...state,
                singleEpisode: action.payload
            }
        case actionName.GET_SINGLE_LOCATION:
            return {
                ...state,
                singleLocation: action.payload
            }
        case actionName.GET_SINGLE_CHARACTER:
            return {
                ...state,
                singleCharacter: action.payload
            }
        case actionName.GET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case actionName.GET_EPISODE:
            return {
                ...state,
                episode: action.payload
            }
        case actionName.GET_CHARACTER:{
            return {
                ...state,
                character: action.payload
            }
        }

        case actionName.GET_INFO:
            return {
                ...state,
                info: action.payload

            }
        case actionName.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload

            }
        case actionName.SET_PARAMS:
            return {
                ...state,
                params: action.payload

            }
        case actionName.SET_NAME:
            return {
                ...state,
                name: action.payload

            }

        default:
            return state
    }

}
export {reducer}
// export const getNewCharacter = (payload) => ({type: GET_CHARACTER, payload})
// export const getSingleCharacter = (payload) => ({type: GET_SINGLE_CHARACTER, payload})
// export const getNewLocation = (payload) => ({type: GET_LOCATION, payload})
// export const getSingleLocation = (payload) => ({type: GET_SINGLE_LOCATION, payload})
// export const getNewEpisode = (payload) => ({type: GET_EPISODE, payload})
// export const getSingleEpisode = (payload) => ({type: GET_SINGLE_EPISODE, payload})
// export const getNewInfo = (payload) => ({type: GET_INFO, payload})
// export const updateCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})
export const updateParams = (payload) => ({type: actionName.SET_PARAMS, payload})
export const updateName = (payload) => ({type: actionName.SET_NAME, payload})
export const addLike = (payload) => ({type: actionName.ADD_LIKE, payload})
export const removeLike = (payload) => ({type: actionName.REMOVE_LIKE, payload})
export const loadingTrue = () => ({type: actionName.LOADING_TRUE})
export const loadingFalse = () => ({type: actionName.LOADING_FALSE})