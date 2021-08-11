import {getNewEpisode, getNewInfo} from "../Reducers/character_reducer";
import {instance} from "../../axois";

export const axiosEpisode = (currentPage,params) => {
    return function (dispatch){
        instance.get(`/episode`,{
            params: {
                page: currentPage!==NaN? currentPage:1,
                name: params,

            }
        }).then(data =>{
            dispatch(getNewEpisode(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}