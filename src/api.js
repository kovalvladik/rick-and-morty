import instance from "./axois";
import {API_URL} from "./config";



const getAllCharacters = async () => {
    const response = await instance.get('/character?page=13')
    console.log(response)
    return response;
}

const getSingleCharacter = async (id) => {
    const response = await instance.get(`/character/${id}`)
    console.log(response)
    return response;
}



const getAllLocation = async () => {
    const response = await fetch(API_URL + `/location`)
    return await response.json()
}
const getSingleLocation = async (id) => {
    const response = await fetch(API_URL + `/location/${id}`)
    return await response.json()
}
const getAllEpisode = async () => {
    const response = await fetch(API_URL + `/episode`)
    return await response.json()
}
const getSingleEpisode = async (id) => {
    const response = await fetch(API_URL + `/episode/${id}`)
    return await response.json()
}

    export {getAllCharacters,
            getSingleCharacter,
             getAllLocation,
        getSingleLocation,
        getAllEpisode,
        getSingleEpisode,
        getAllCharactersZ
}