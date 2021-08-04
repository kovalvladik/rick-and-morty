import {useEffect, useState} from "react";
import React from "react";
import {getSingleCharacter} from "../api";
import {useParams} from 'react-router-dom'
import {List, ListItem} from "@material-ui/core";

function CharacterProfile () {
    const [character,setCharacter] = useState([])

    const {name,status,species,gender,image} = character

    const {id} = useParams()

    useEffect(()=>{
        getSingleCharacter(id).then(data =>{
            setCharacter(data)
            console.log('character')
        })
    },[])
        return<>
            <List >
                {name}
                {status}
                {species}
                {gender}


            </List>
</>

}
export {CharacterProfile}