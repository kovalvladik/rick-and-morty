import React from "react";
import {List} from "@material-ui/core";

function EpisodeInfo({name, air_date, episode, characters}) {

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