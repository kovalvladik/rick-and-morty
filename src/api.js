

import {API_URL} from "./config";

const getAllCharacters = async () => {
    const response = await fetch(API_URL + '/character?page=13')
    return await response.json()
}
const getSingleCharacter = async (id) => {
    const response = await fetch(API_URL + `/character/${id}`)
    return await response.json()
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
        getSingleEpisode
}