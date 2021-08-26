import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LocationItem} from "../LocationItem";
import Preloader from "../../Preloader";
import {useSelector} from "react-redux";

const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding: '3rem'
        // marginLeft:'3px'
    },
    pagination: {
        paddingLeft: '35%',
        paddingTop: '2rem'
    },
})

function LocationList() {

    const location = useSelector(state => state.location)

    const classes = useStyle()

    return (location.length !== 0 ? <Grid container spacing={3} className={classes.root}>
        {location.map((location) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <LocationItem key={location.id} {...location}/>
                </Grid>
            ))}

    </Grid> : <Preloader/>)
}

export {LocationList}