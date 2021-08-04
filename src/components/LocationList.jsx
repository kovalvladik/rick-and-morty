import {useEffect, useState} from "react";
import {getAllEpisode, getAllLocation} from "../api";
import {CharacterItem} from "./CharacterItem";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {EpisodeItem} from "./EpisodeItem";
import {LocationItem} from "./LocationItem";

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function LocationList () {

    const classes = useStyle()


    const [location, setLocation] = useState([])

    useEffect(()=>{
        getAllLocation().then(data =>{
            setLocation(data.results)
        })
    },[])

    return<Grid container spacing={3}  className={classes.root}>
        {location.map((location) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <LocationItem  key={location.id} {...location}/>
                </Grid>
            ))}
    </Grid>
}
export {LocationList}