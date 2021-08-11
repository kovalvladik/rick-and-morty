


const defaultState = {
    character: [],
    info: {},
    currentPage: +1,
    params: '',
    name: '',

}

const GET_CHARACTER = "GET_CHARACTER"
const GET_INFO = "GET_INFO"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_PARAMS = "SET_PARAMS"
const SET_NAME = "SET_NAME"

const reducer = (state = defaultState,action) => {
    switch (action.type) {
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
export const getNewInfo = (payload) =>({type:GET_INFO,payload})
export const updateCurrentPage = (payload) =>({type:SET_CURRENT_PAGE,payload})
export const updateParams = (payload) =>({type:SET_PARAMS,payload})
export const updateName = (payload) =>({type:SET_NAME,payload})