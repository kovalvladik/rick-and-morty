import { getSingleCharacter} from "../Reducers/reducer";
import {instance} from "../../axois";

export const axiosSingleCharacter = (id) => {
    return function (dispatch){
        instance.get(`/character/${id}`).then(data =>{
            dispatch(getSingleCharacter(data.data))
        })
    }
}


