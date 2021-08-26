import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Grid, List, Typography} from "@material-ui/core";
import {axiosSingleLocation} from "../../redux/AsyncActions/singleLocation";
import {useDispatch, useSelector} from "react-redux";
import {addLike, removeLike} from "../../redux/Reducers/reducer";

function LocationInfo () {


    const location = useSelector(state => state.singleLocation)

    const {name,type,dimension,residents} = location

    const [click, setClick] = useState(false)

    const handleClick = () =>{
        setClick(!click)
        if (click===false){
            dispatch(addLike())
        }else {
            dispatch(removeLike())
        }
    }

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{
       dispatch(axiosSingleLocation(id))
    },[])
    return<>
        <List >
            <Grid container spacing={3}>
                <Grid item>
                    <Typography>Name: {name}</Typography>
                    <Typography> Type: {type}</Typography>
                    <Typography>Dimension: {dimension}</Typography>
                    <Typography>Residents: {residents}</Typography>
                    <button onClick={()=>{handleClick()}}>like</button>

                </Grid>
            </Grid>



        </List>
    </>

}
export {LocationInfo}