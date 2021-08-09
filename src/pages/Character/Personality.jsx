import {CharacterProfile} from "../../components/Character/CharacterProfile";
import { makeStyles} from "@material-ui/core";




const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },

})


function Personality(){
    const classes = useStyles()
 return<main className={classes.root}>

     hey:<CharacterProfile/>
 </main>
}
export {Personality}