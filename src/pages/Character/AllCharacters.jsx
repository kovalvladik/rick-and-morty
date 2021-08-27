import { makeStyles} from "@material-ui/core";
import PaginationLink from "../../components/PaginationLilk/PaginationLink";
import React from "react";
import {Search} from "../../components/Search";
import {CharacterList} from "../../components/Character/CharacterList/CharacterList";
import {CharacterListContainer} from "../../components/Character/CharacterList/CharacterListContainer";


const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters () {
    const classes = useStyles()
 return<main className={classes.root}>
     <Search/>
     <CharacterListContainer/>
     <PaginationLink />
 </main>

}
export {AllCharacters}