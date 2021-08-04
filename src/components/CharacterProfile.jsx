import {useEffect, useState} from "react";
import React from "react";
import {getSingleCharacter} from "../api";
import {useParams} from 'react-router-dom'
import {Button, List} from "@material-ui/core";

function CharacterProfile () {
    const [character,setCharacter] = useState([])

    const {name,status,species,gender,episode} = character

    const {id} = useParams()

    useEffect(()=>{
        getSingleCharacter(id).then(data =>{
            setCharacter(data.data)
            console.log('character')
        })
    },[])
        return<>
            <List >
                {name}
                {status}
                {species}
                {/*{*/}
                {/*    episode*/}
                {/*        ? episode*/}
                {/*            .split(",")*/}
                {/*            .map((episode) => (*/}
                {/*                <Button*/}
                {/*                    size='small'*/}
                {/*                    variant='outlined'*/}
                {/*                    style={{ marginRight: 5 }}*/}
                {/*                >{episode}</Button>*/}
                {/*            ))*/}
                {/*        : null*/}
                {/*}*/}


            </List>
</>

}
export {CharacterProfile}