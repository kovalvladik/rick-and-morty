
import {instance} from './axois'




const getSingleLocation = async (id) => {
    const response = await instance.get(`/location/${id}`)
    return response;
}


const getSingleEpisode = async (id) => {
    const response = await instance.get( `/episode/${id}`)
    return response;
}





    export {
        getSingleLocation,
        getSingleEpisode,



}