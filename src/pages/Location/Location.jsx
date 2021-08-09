import {LocationInfo} from "../../components/Location/LocationInfo";
import { makeStyles} from "@material-ui/core";



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