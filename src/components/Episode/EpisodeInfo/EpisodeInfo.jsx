import React from "react";
import {List} from "@material-ui/core";
import {useSelector} from "react-redux";

function EpisodeInfo() {

    const episodes = useSelector(state => state.singleEpisode)

    const {name, air_date, episode, characters} = episodes

    return <>
        <List>
            {name}
            {air_date}
            {episode}
            {characters}


        </List>
    </>

}

export {EpisodeInfo}