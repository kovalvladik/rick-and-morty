import React, {useEffect, useState} from "react";
import {getAllCharacters, getAllCharactersz, getLastPage, getNewPage, getNextPage} from "../api";
import {CharacterItem} from "./CharacterItem";
import { Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import {MemoryRouter, Route, useLocation, useParams} from 'react-router';
import {Link, Router, useHistory} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import PaginationLink from "./PaginationLink";


const useStyle = makeStyles({
    root: {
        flexGrow: 1,
        padding:'3rem'
        // marginLeft:'3px'
    },
})


function CharacterList () {

    const classes = useStyle

    const {push} = useHistory()

    const  {pathname,search} = useLocation()

    const [character, setCharacter] = useState([])
    const [info, setInfo] = useState({})

    const [currentPage, setCurrentPage] = useState(1)

    // const location = useLocation()
    // console.log(location.search.split('=')[1])
    // const searchPage = (search.split('=')[1])
    // console.log(searchPage)

    // const [page, setPage] = useState(1);
    // const handleChange = (event, value) => {
    //     setPage(value)
    //     push({
    //         pathname,
    //         search: `?page=${value}`
    //     })
    //
    // };
    //
    // const handleSearchChange = () => {
    //     setPage(searchPage)
    //     push({
    //         pathname,
    //         search: `${searchPage}`
    //     })
    //     console.log(searchPage)
    // }


    // useEffect(()=>{
    //     getAllCharacters().then(data =>{
    //         setCharacter(data.data.results)
    //         setInfo(data.data.info)
    //         console.log(data.data.results)
    //         console.log(data.data.info)
    //     })
    // },[])

    useEffect( ()=>{
        if(search.split('=')[1]!== 1){
            getAllCharactersz(search.split('=')[1]).then(data =>{
                setCharacter(data.data.results)
                setInfo(data.data.info)
                console.log(data.data.results)
                console.log(data.data.info)

            })
        }else {
            getAllCharacters().then(data =>{
                setCharacter(data.data.results)
                setInfo(data.data.info)
                console.log(data.data.results)
                console.log(data.data.info)
            })
        }

    },[search])



    return<Grid container spacing={3}  className={classes.root}>
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
    </Grid>
}
export {CharacterList}