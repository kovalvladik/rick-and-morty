


const defaultState = {
    character: [],
    singleCharacter:[],
    singleLocation:[],
    singleEpisode:[],
    episode: [],
    location: [],
    info: {},
    currentPage: +1,
    params: '',
    name: '',

}

const GET_CHARACTER = "GET_CHARACTER"
const GET_SINGLE_CHARACTER = "GET_SINGLE_CHARACTER"
const GET_EPISODE = "GET_EPISODE"
const GET_SINGLE_EPISODE = "GET_SINGLE_EPISODE"
const GET_LOCATION = "GET_LOCATION"
const GET_SINGLE_LOCATION = "GET_SINGLE_LOCATION"
const GET_INFO = "GET_INFO"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_PARAMS = "SET_PARAMS"
const SET_NAME = "SET_NAME"

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SINGLE_EPISODE:
            return {
                ...state,
                singleEpisode: action.payload
            }
        case GET_SINGLE_LOCATION:
            return {
                ...state,
                singleLocation: action.payload
            }
        case GET_SINGLE_CHARACTER:
            return {
                ...state,
                singleCharacter: action.payload
            }
        case GET_LOCATION:
            return {
                ...state,
                location: action.payload
            }
        case GET_EPISODE:
            return {
                ...state,
                episode: action.payload
            }
        case GET_CHARACTER:
            return{
                ...state,
                character: action.payload
            }
        case GET_INFO:
            return{
                ...state,
                info: action.payload

            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload

            }
        case SET_PARAMS:
            return{
                ...state,
                params: action.payload

            }
        case SET_NAME:
            return{
                ...state,
                name: action.payload

            }




        default:
            return state
    }

}

export {reducer}
export const getNewCharacter = (payload) =>({type:GET_CHARACTER,payload})
export const getSingleCharacter = (payload) =>({type:GET_SINGLE_CHARACTER,payload})
export const getNewLocation = (payload) =>({type:GET_LOCATION,payload})
export const getSingleLocation = (payload) =>({type:GET_SINGLE_LOCATION,payload})
export const getNewEpisode = (payload) =>({type:GET_EPISODE,payload})
export const getSingleEpisode = (payload) =>({type:GET_SINGLE_EPISODE,payload})
export const getNewInfo = (payload) =>({type:GET_INFO,payload})
export const updateCurrentPage = (payload) =>({type:SET_CURRENT_PAGE,payload})
export const updateParams = (payload) =>({type:SET_PARAMS,payload})
export const updateName = (payload) =>({type:SET_NAME,payload})