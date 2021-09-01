import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {axiosEpisode} from "../../../redux/AsyncActions/episode";
import {updateCurrentPage} from "../../../redux/Reducers/reducer";
import {EpisodeList} from "./EpisodeList";


export default function EpisodeListContainer() {

    const dispatch = useDispatch()

    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)


    useEffect(() => {
        dispatch({type:'LOAD_EPISODE', args:{currentPage,params}})
    }, [currentPage, params])
    return <>
        <EpisodeList/>
    </>
}