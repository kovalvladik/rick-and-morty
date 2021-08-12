import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getSingleEpisode} from "../../api";
import {List} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {axiosSingleEpisode} from "../../redux/AsyncActions/singleEpisode";

function EpisodeInfo () {

    const episodes = useSelector(state => state.singleEpisode)

    const {name,air_date,episode,characters} = episodes

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{
        dispatch(axiosSingleEpisode(id))
    },[])
    return<>
        <List >
            {name}
            {air_date}
            {episode}
            {characters}


        </List>
    </>

}
export {EpisodeInfo}