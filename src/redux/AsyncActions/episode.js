import {instance} from "../../axois";

async function axiosEpisode(args) {
    console.log(args.params)

    const results = await instance.get(`/episode`, {
        params: {
            page: args.currentPage,
            name: args.params,

        }
    })
    console.log(results.data.results)
    return results.data
}

export default axiosEpisode