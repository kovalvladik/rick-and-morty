 import {API_URL} from "./api";

const getAllCharacters = async () => {
    const response = await fetch(API_URL + 'character?page=19')
    return await response.json()
}

export {getAllCharacters}