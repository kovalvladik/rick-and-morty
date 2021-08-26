import {EpisodeInfo} from "./EpisodeInfo";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {axiosSingleEpisode} from "../../../redux/AsyncActions/singleEpisode";

export default function EpisodeInfoContainer(){

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(axiosSingleEpisode(id))
    },[])

    return<>
        <EpisodeInfo/>
    </>
}