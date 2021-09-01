import {instance} from "../../axois";

async function axiosLocation(args){
    console.log(args.params)

    const results =await instance.get(`/location`,{
        params: {
            page: args.currentPage,
            name: args.params,

        }})
    console.log(results.data.results)
    return results.data
}
export default axiosLocation