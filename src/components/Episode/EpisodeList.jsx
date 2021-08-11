import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EpisodeItem} from "./EpisodeItem";
import Preloader from "../Preloader";
import {useDispatch, useSelector} from "react-redux";
import {axiosEpisode} from "../../redux/AsyncActions/episode";


const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function EpisodeList () {

    const classes = useStyle()

    const dispatch = useDispatch()

    const episode = useSelector(state => state.episode)

    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)


    useEffect(async ()=>{
        await  dispatch(axiosEpisode(currentPage,params))

    },[currentPage,params])

    return(episode.length !== 0 ? <Grid container spacing={3}  className={classes.root}>
        {episode.map((episode) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <EpisodeItem  key={episode.id} {...episode}/>
                </Grid>
            ))}

    </Grid> : <Preloader/>)
}
export {EpisodeList}