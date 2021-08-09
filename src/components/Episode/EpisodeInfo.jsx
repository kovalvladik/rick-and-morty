import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getSingleEpisode} from "../../api";
import {List} from "@material-ui/core";

function EpisodeInfo () {
    const [episodes,setEpisodes] = useState([])

    const {name,air_date,episode,characters} = episodes

    const {id} = useParams()

    useEffect(()=>{
        getSingleEpisode(id).then(data =>{
            setEpisodes(data.data)
            console.log('episode')
        })
    },[id])
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