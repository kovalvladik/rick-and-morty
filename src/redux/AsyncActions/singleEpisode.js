import {getSingleEpisode} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosSingleEpisode = (id) => {
    return function (dispatch){
        instance.get(`/episode/${id}`).then(data =>{
            dispatch(getSingleEpisode(data.data))
        })
    }
}