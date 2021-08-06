
import {instance} from './axois'



const getAllCharacters = async () => {
    const response = await instance.get('/character?page')
    return response;
}

const getAllCharactersz = async (id) => {
    if(id==undefined){
        const response = await instance.get(`/character?page=}`)
        return response;
    } else {
        const response = await instance.get(`/character?page=${id}`)
        console.log(`/character?page=${id}`)

        return response;
    }


}
const getLastPage = async (id) => {
    const response = await instance.get(`/character?page${id}`)
    return response;
}

const getSingleCharacter = async (id) => {
    const response = await instance.get(`/character/${id}`)
    return response;
}
const getAllLocation = async () => {
    const response = await instance.get(`/location`)
    return response;

}

const getSingleLocation = async (id) => {
    const response = await instance.get(`/location/${id}`)
    return response;
}

const getAllEpisode = async (id) => {
    if(id==undefined){
        const response = await instance.get( `/episode?page=`)
        return response;
    } else {
        const response = await instance.get( `/episode?page=${id}`)
        return response;
    }

}

const getSingleEpisode = async (id) => {
    const response = await instance.get( `/episode/${id}`)
    return response;
}





    export {getAllCharacters,
            getSingleCharacter,
             getAllLocation,
        getSingleLocation,
        getAllEpisode,
        getSingleEpisode,
        getLastPage,
        getAllCharactersz



}