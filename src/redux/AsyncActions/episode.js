import {getNewEpisode, getNewInfo} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosEpisode = (currentPage,params) => {
    return function (dispatch){
        instance.get(`/episode?page=${!isNaN(currentPage)?currentPage:1}`,{
            params: {
                // page: currentPage,
                name: params,

            }
        }).then(data =>{
            console.log( currentPage)
            dispatch(getNewEpisode(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}