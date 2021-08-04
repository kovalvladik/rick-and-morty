import {useEffect, useState} from "react";
import {getAllEpisode} from "../api";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EpisodeItem} from "./EpisodeItem";

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function EpisodeList () {

    const classes = useStyle()


    const [episode, setEpisode] = useState([])

    useEffect(()=>{
        getAllEpisode().then(data =>{
            setEpisode(data.results)
        })
    },[])

    return<Grid container spacing={3}  className={classes.root}>
        {episode.map((episode) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <EpisodeItem  key={episode.id} {...episode}/>
                </Grid>
            ))}
    </Grid>
}
export {EpisodeList}