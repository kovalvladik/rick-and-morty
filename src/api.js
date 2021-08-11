
import {instance} from './axois'




const getSingleCharacter = async (id) => {
    const response = await instance.get(`/character/${id}`)
    return response;
}

const getSingleLocation = async (id) => {
    const response = await instance.get(`/location/${id}`)
    return response;
}


const getSingleEpisode = async (id) => {
    const response = await instance.get( `/episode/${id}`)
    return response;
}





    export {
            getSingleCharacter,
        getSingleLocation,
        getSingleEpisode,



}