import {instance} from "../../axois";

async function axiosSingleEpisode(id){
    const results =await instance.get(`/episode/${id}`)
    return results.data
}
export default axiosSingleEpisode
