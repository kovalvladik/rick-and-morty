import {makeStyles} from "@material-ui/core";
import React from "react";
import {CharacterListContainer} from "../../components/Character/CharacterList/CharacterListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";
import SearchContainer from "../../components/Search/SearchContainer";


const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters() {
    const classes = useStyles()
    return <main className={classes.root}>
        <SearchContainer/>
        <CharacterListContainer/>
        <PaginationLinkContainer/>
    </main>

}

export {AllCharacters}