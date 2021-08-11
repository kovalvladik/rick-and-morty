import React, {useEffect, useState} from "react";
import { getAllCharactersz} from "../../api";
import {CharacterItem} from "./CharacterItem";
import {Button, Checkbox, FormControlLabel, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import { useLocation} from 'react-router';
import { useHistory} from 'react-router-dom';
import PaginationLink from "../PaginationLink";
import {Search} from "../Search";
import Preloader from "../Preloader";
import SearchParams from "./SearchParams";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {instance} from "../../axois";
import {useDispatch, useSelector} from "react-redux";
import {axiosCharacters} from "../../redux/AsyncActions/characters";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
    search:{
        paddingLeft:'10%',
        width: '100%',
        backgroundColor:'blue',

    },
    imput:{
        width: '70%',
    },

})


function CharacterList () {

    const classes = useStyles()

    const {push} = useHistory()

    const  {pathname,search} = useLocation()

    const dispatch = useDispatch()

    const character = useSelector(state => state.character)


    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)

    console.log(currentPage)

    useEffect(async ()=>{

        await  dispatch(axiosCharacters(currentPage,params))

    }, [currentPage,params])



    return(character.length !== 0 ?
        <Grid container spacing={3}  className={classes.root}>
        {character.map((character) => 
        (<Grid item xs={12} sm={6} md={6} lg={4} >
                    <CharacterItem  key={character.id} {...character}/>
        </Grid>
        ))}
    </Grid> : <Preloader/>)
}
export {CharacterList}