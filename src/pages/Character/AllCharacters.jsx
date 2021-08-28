import {makeStyles} from "@material-ui/core";
import React from "react";
import {Search} from "../../components/Search/Search";
import {CharacterListContainer} from "../../components/Character/CharacterList/CharacterListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";


const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters() {
    const classes = useStyles()
    return <main className={classes.root}>
        <Search/>
        <CharacterListContainer/>
        <PaginationLinkContainer/>
    </main>

}

export {AllCharacters}