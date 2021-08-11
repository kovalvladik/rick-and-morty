import {getNewCharacter, getNewInfo, updateCurrentPage} from "../Reducers/character_reducer";
import {instance} from "../../axois";

export const axiosCharacters = (currentPage,params) => {
    return function (dispatch){
        instance.get(`/character/`,{
            params: {
                page: currentPage,
                name: params,

            }
        }).then(data =>{
            dispatch(getNewCharacter(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}