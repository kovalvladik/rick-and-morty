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

    const [character, setCharacter] = useState([])

    const [filteredChar, setFilteredChar] = useState([])

    const [info, setInfo] = useState({})

    const [currentPage, setCurrentPage] = useState(1)

    const [params, setParams ]= useState('')

    const [name, setName ]= useState('')


    const characters = (id) => {

        instance.get(`/character`,{
            params: {
                page: id,
                name: params,

            }
        }).then(data =>{
            setCharacter(data.data.results)
            setInfo(data.data.info)
            setCurrentPage(1)
        })
    }




    useEffect(async ()=>{

        await characters(search.split('=')[1])

    }, [search,name])



    const handleSearch = () => {
        setName(params)
        console.log( name)
        push({
            pathname,
            search: `?name=${params}`
        })

    }




    return(character.length !== 0 ?
        <Grid container spacing={3}  className={classes.root}>
        {/*<Search character={character}/>*/}


            <Grid container >
                <Grid item className={classes.search}>


                    <div>
                        <SearchIcon />
                        <InputBase className={classes.imput}
                            placeholder="Search…"

                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e)=>setParams(e.target.value)}
                            value={params}
                        />
                        <Button  onClick={handleSearch}> press</Button>
                        {/*<FormControlLabel*/}
                        {/*aria-label="Acknowledge"*/}
                        {/*onClick={setStatus('dead')}*/}
                        {/*control={<Checkbox />}*/}
                        {/*label="Dead"*/}
                        {/*/>*/}
                    </div>


                </Grid>


            </Grid>






        {character.map((character) => 
        (<Grid item xs={12} sm={6} md={6} lg={4} >

                    <CharacterItem  key={character.id} {...character}/>


        </Grid>
        ))}
        <Grid container>
            <Grid item>
                <PaginationLink info={info} currentPage={currentPage}/>
            </Grid>
        </Grid>
    </Grid> : <Preloader/>)
}
export {CharacterList}