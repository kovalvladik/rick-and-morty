import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EpisodeItem} from "../EpisodeItem";
import Preloader from "../../Preloader";
import {useSelector} from "react-redux";

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding: '3rem'
        // marginLeft:'3px'
    },
})

function EpisodeList() {

    const classes = useStyle()

    const episode = useSelector(state => state.episode)

    return (episode.length !== 0 ? <Grid container spacing={3} className={classes.root}>
        {episode.map((episode) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <EpisodeItem key={episode.id} {...episode}/>
                </Grid>
            ))}

    </Grid> : <Preloader/>)
}

export {EpisodeList}