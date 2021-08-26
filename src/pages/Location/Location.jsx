import { makeStyles} from "@material-ui/core";
import LocationInfoContainer from "../../components/Location/LocationInfo/LocationInfoContainer";



const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function Location(){
    const classes = useStyles()
 return<main className={classes.root}>
     <LocationInfoContainer/>
 </main>
}
export {Location}