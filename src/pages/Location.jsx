import {LocationInfo} from "../components/LocationInfo";
import {Button, Card, CardHeader, Grid, makeStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";



const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function Location(){
    const classes = useStyles()
 return<main className={classes.root}>
     <LocationInfo/>
 </main>
}
export {Location}