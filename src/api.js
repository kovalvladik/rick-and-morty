
import {instance} from './axois'




const getLastPage = async (id) => {
    const response = await instance.get(`/character?page${id}`)
    return response;
}

const getSingleCharacter = async (id) => {
    const response = await instance.get(`/character/${id}`)
    return response;
}
const getAllLocation = async (id) => {
    if(id==undefined){
        const response = await instance.get(`/location`)
        return response;
    }else {
        const response = await instance.get(`/location?page=${id}`)
        return response;
    }


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
             getAllLocation,
        getSingleLocation,
        getSingleEpisode,
        getLastPage,



}