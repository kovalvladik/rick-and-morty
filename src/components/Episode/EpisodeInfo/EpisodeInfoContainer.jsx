import {EpisodeInfo} from "./EpisodeInfo";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

export default function EpisodeInfoContainer() {

    const dispatch = useDispatch()

    const episodes = useSelector(state => state.singleEpisode)

    const {id} = useParams()

    useEffect(() => {
        dispatch({type:'LOAD_SINGLE_EPISODE', args:id})
    }, [])

    return <>
        <EpisodeInfo {...episodes}/>
    </>
}