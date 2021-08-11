import {getNewCharacter, getNewInfo, getNewLocation, updateCurrentPage} from "../Reducers/character_reducer";
import {instance} from "../../axois";

export const axiosLocation = (currentPage,params) => {
    return function (dispatch){
        instance.get(`/location`,{
            params: {
                page: currentPage,
                name: params,

            }
        }).then(data =>{
            dispatch(getNewLocation(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}