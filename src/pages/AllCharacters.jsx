import {CharacterList} from "../components/CharacterList";
import { makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllCharacters () {
    const classes = useStyles()
 return<main className={classes.root}>
     <CharacterList/>
 </main>

}
export {AllCharacters}