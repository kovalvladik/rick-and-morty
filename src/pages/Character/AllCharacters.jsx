import {CharacterList} from "../../components/Character/CharacterList";
import { makeStyles} from "@material-ui/core";
import PaginationLink from "../../components/PaginationLink";
import React from "react";
import {Search} from "../../components/Search";


const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters () {
    const classes = useStyles()
 return<main className={classes.root}>
     <Search/>
     <CharacterList/>
     <PaginationLink />
 </main>

}
export {AllCharacters}