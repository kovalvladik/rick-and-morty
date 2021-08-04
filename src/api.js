import instance from "./axois";



const getAllCharacters = async () => {
    const response = await instance.get('/character?page=13')
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

const getAllEpisode = async () => {
    const response = await instance.get( `/episode`)
    return response;
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

}