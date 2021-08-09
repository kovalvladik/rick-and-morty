import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getSingleLocation} from "../../api";
import {List} from "@material-ui/core";

function LocationInfo () {
    const [location,setLocation] = useState([])

    const {name,type,dimension,residents} = location

    const {id} = useParams()

    useEffect(()=>{
        getSingleLocation(id).then(data =>{
            setLocation(data.data)
            console.log('location')
        })
    },[id])
    return<>
        <List >
            {name}
            {type}
            {dimension}

        </List>
    </>

}
export {LocationInfo}