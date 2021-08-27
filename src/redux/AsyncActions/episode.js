import {getNewEpisode, getNewInfo} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosEpisode = (currentPage, params) => {
    return function (dispatch) {
        instance.get(`/episode`, {
            params: {
                page: currentPage,
                name: params,

            }
        }).then(data => {
            dispatch(getNewEpisode(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}