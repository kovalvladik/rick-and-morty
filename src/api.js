
import {instance} from './axois'


//
// const getAllCharacters = async () => {
//     const response = await instance.get('/character?page')
//     return response;
// }

const getAllCharactersz = async (id) => {
    if(id===undefined){
        const response = await instance.get(`/character?page=`)
        return response;
    } else {
        const response = await instance.get(`/character?page=${id}`)
        console.log(`/character?page=${id}`)

        return response;
    }

}

const getFilteredCharacters = async (name) => {
    const response = await instance.get(`/character?name=${name}`)
    console.log(`/character?name=${name}`)

    return response;
}

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





    export {
            getSingleCharacter,
             getAllLocation,
        getSingleLocation,
        getAllEpisode,
        getSingleEpisode,
        getLastPage,
        getAllCharactersz,
        getFilteredCharacters,



}