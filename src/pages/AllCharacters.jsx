import {CharacterList} from "../components/CharacterList";
import PaginationOutlined from "../components/Pagination";
import {Button, Card, CardHeader, Grid, makeStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";



const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters () {
    const classes = useStyles()
 return<main className={classes.root}>
     <CharacterList/>
     <PaginationOutlined/>
 </main>

}
export {AllCharacters}