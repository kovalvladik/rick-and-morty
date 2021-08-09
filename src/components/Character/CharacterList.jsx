import React, {useEffect, useState} from "react";
import { getAllCharactersz} from "../../api";
import {CharacterItem} from "./CharacterItem";
import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import { useLocation} from 'react-router';
import { useHistory} from 'react-router-dom';
import PaginationLink from "../PaginationLink";
import {Search} from "../Search";
import Preloader from "../Preloader";
import SearchParams from "./SearchParams";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
    search:{
        paddingLeft:'10%',

    },
})


function CharacterList () {

    const classes = useStyles()

    const {push} = useHistory()

    const  {pathname,search} = useLocation()

    const [character, setCharacter] = useState([])

    const [filteredChar, setFilteredChar] = useState([])

    const [info, setInfo] = useState({})

    const [currentPage, setCurrentPage] = useState(1)


    // useEffect( ()=>{
    //     if(search.split('=')[1]!== 1){
    //         getAllCharactersz(search.split('=')[1]).then(data =>{
    //             setCharacter(data.data.results)
    //             setInfo(data.data.info)
    //             console.log(data.data.results)
    //             console.log(data.data.info)
    //
    //         })
    //     }else {
    //         getAllCharactersz().then(data =>{
    //             setCharacter(data.data.results)
    //             setInfo(data.data.info)
    //             setFilteredChar(params ? )
    //             setCurrentPage(1)
    //             console.log(data.data.results)
    //             console.log(data.data.info)
    //         })
    //     }
    //
    // },[search])


    useEffect(()=>{
        getAllCharactersz(search.split('=')[1]).then(data =>{
            setCharacter(data.data.results)
            setInfo(data.data.info)
    }, [search])

    const [params, setParams ]= useState('')


    const handleSearch = (e) => {
        // setParams(e.target.value)
        console.log( params)
        // setParams( e.target.value)
    }




    return(character.length !== 0 ?
        <Grid container spacing={3}  className={classes.root}>
        {/*<Search character={character}/>*/}


            <Grid container >
                <Grid item className={classes.search}>

                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"

                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e)=>setParams(e.target.value)}
                            value={params}
                        />
                        <Button  onClick={handleSearch}> press</Button>

                </Grid>


            </Grid>






        {character.map((character) => 
        (<Grid item xs={12} sm={6} md={4} lg={3} >

                    <CharacterItem  key={character.id} {...character}/>


        </Grid>
        ))}
        <Grid container>
            <Grid item>
                <PaginationLink info={info} />
            </Grid>
        </Grid>
    </Grid> : <Preloader/>)
}
export {CharacterList}