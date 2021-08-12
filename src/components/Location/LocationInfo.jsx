import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {List} from "@material-ui/core";
import {axiosSingleLocation} from "../../redux/AsyncActions/singleLocation";
import {useDispatch, useSelector} from "react-redux";

function LocationInfo () {


    const location = useSelector(state => state.singleLocation)

    const {name,type,dimension,residents} = location

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{
       dispatch(axiosSingleLocation(id))
    },[])
    return<>
        <List >
            {name}
            {type}
            {dimension}

        </List>
    </>

}
export {LocationInfo}