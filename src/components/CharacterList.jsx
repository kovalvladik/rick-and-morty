import {useEffect, useState} from "react";
import {getAllCharacters, getAllCharactersZ} from "../api";
import {CharacterItem} from "./CharacterItem";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { DataGrid } from '@material-ui/data-grid';


const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function CharacterList () {

    const classes = useStyle


    const [character, setCharacter] = useState([])

    useEffect(()=>{
        getAllCharacters().then(data =>{
            setCharacter(data.data.results)
            console.log(data.data.results)
        })
    },[])

    return<Grid container spacing={3}  className={classes.root}>
        {character.map((character) => 
        (<Grid item xs={12} sm={6} md={4} lg={3} >

                    <CharacterItem  key={character.id} {...character}/>


        </Grid>
        ))}
    </Grid>
}
export {CharacterList}