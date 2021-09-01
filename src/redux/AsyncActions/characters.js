import {instance} from "../../axois";

async function axiosCharacters(args) {
    console.log(args.params)

    const results = await instance.get(`/character`, {
        params: {
            page: args.currentPage,
            name: args.params,

        }
    })
    console.log(results.data.results)
    return results.data
}

export default axiosCharacters