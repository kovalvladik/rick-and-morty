import { getSingleLocation} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosSingleLocation = (id) => {
    return function (dispatch){
        instance.get(`/location/${id}`).then(data =>{
            dispatch(getSingleLocation(data.data))
        })
    }
}


