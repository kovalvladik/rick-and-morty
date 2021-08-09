import React, {useEffect, useState} from "react";
import {getAllEpisode} from "../../api";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EpisodeItem} from "./EpisodeItem";
import PaginationLink from "../PaginationLink";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router";
import Preloader from "../Preloader";


const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function EpisodeList () {

    const classes = useStyle()
    const {push} = useHistory()

    const  {pathname,search} = useLocation()

    const [episode, setEpisode] = useState([])
    const [info, setInfo] = useState({})

    useEffect(()=>{
        if( search.split('=')[1]!== 1){
            getAllEpisode(search.split('=')[1]).then(data =>{
                setEpisode(data.data.results)
                setInfo(data.data.info)
            })
        } else {
            getAllEpisode().then(data =>{
                setEpisode(data.data.results)
                setInfo(data.data.info)
            })
        }

    },[search])

    return(episode.length !== 0 ? <Grid container spacing={3}  className={classes.root}>
        {episode.map((episode) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <EpisodeItem  key={episode.id} {...episode}/>
                </Grid>
            ))}
        <Grid container>
            <Grid item>
                <PaginationLink info={info} />
            </Grid>
        </Grid>
    </Grid> : <Preloader/>)
}
export {EpisodeList}