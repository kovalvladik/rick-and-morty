import {instance} from "../../axois";

async function axiosSingleLocation(id) {
    const results = await instance.get(`/location/${id}`)
    return results.data
}

export default axiosSingleLocation



