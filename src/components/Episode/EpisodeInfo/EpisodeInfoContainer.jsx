import {EpisodeInfo} from "./EpisodeInfo";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {axiosSingleEpisode} from "../../../redux/AsyncActions/singleEpisode";

export default function EpisodeInfoContainer() {

    const dispatch = useDispatch()

    const episodes = useSelector(state => state.singleEpisode)

    const {id} = useParams()

    useEffect(() => {
        dispatch(axiosSingleEpisode(id))
    }, [])

    return <>
        <EpisodeInfo {...episodes}/>
    </>
}