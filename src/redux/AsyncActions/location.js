import { getNewInfo, getNewLocation} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosLocation = (currentPage,params) => {
    return function (dispatch){
        instance.get(`/location`,{
            params: {
                // page:  isNaN(currentPage)?+1:currentPage,
                page:  currentPage,
                name: params,

            }
        }).then(data =>{

            dispatch(getNewLocation(data.data.results))
            dispatch(getNewInfo(data.data.info))
        })
    }
}