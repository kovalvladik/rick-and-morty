import {instance} from "../../axois";

async function axiosSingleCharacter(id) {
    const results = await instance.get(`/character/${id}`)
    return results.data
}

export default axiosSingleCharacter
