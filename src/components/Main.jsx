import {Container, makeStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import {getAllCharacters} from '../config'

const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 135px)',
    }
})

function Main () {

    const [character, setCharacter] = useState([])

    const classes = useStyles()

    useEffect(()=>{
        getAllCharacters().then(data =>{
            setCharacter(data.results)
        })
    },[character])

    return<Container className={classes.root}>
        {character.map(character => <div>{character.name}</div>)}
    </Container>
}
export {Main}