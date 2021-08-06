import axios from "axios";




const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
 // params:{
 //        page:1
 // }
});
export { instance}