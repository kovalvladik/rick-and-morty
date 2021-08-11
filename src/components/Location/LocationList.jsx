import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LocationItem} from "./LocationItem";
import Preloader from "../Preloader";
import {axiosLocation} from "../../redux/AsyncActions/location";
import {useDispatch, useSelector} from "react-redux";


const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
    pagination:{
        paddingLeft:'35%',
        paddingTop:'2rem'
    },
})


function LocationList () {

    const classes = useStyle()

    const dispatch = useDispatch()

    const location = useSelector(state => state.location)

    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)


    useEffect(async ()=>{
        await  dispatch(axiosLocation(currentPage,params))
    },[currentPage,params])

    return(location.length !==0 ?  <Grid container spacing={3}  className={classes.root}>
        {location.map((location) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <LocationItem  key={location.id} {...location}/>
                </Grid>
            ))}

    </Grid> : <Preloader/>)
}
export {LocationList}