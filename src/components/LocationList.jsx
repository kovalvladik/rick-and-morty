import React, {useEffect, useState} from "react";
import { getAllLocation} from "../api";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {LocationItem} from "./LocationItem";
import PaginationLink from "./PaginationLink";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router";
import Preloader from "./Preloader";


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

    const {push} = useHistory()

    const  {pathname,search} = useLocation()

    const [location, setLocation] = useState([])
    const [info, setInfo] = useState({})

    useEffect(()=>{
        if( search.split('=')[1]!== 1){
            getAllLocation( search.split('=')[1]).then(data =>{
                setLocation(data.data.results)
                setInfo(data.data.info)
            })
        }else {
            getAllLocation().then(data =>{
                setLocation(data.data.results)
                setInfo(data.data.info)
            })
        }


    },[search])

    return(location.length !==0 ?  <Grid container spacing={3}  className={classes.root}>
        {location.map((location) =>
            (<Grid item xs={12} sm={6} md={4} lg={3}>
                    <LocationItem  key={location.id} {...location}/>
                </Grid>
            ))}
        <Grid container className={classes.pagination}>
            <Grid item>
                < PaginationLink info={info} />
            </Grid>
        </Grid>
    </Grid> : <Preloader/>)
}
export {LocationList}