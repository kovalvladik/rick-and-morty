import {makeStyles} from "@material-ui/core";
import CharacterProfileContainer from "../../components/Character/characterProfile/CraracterProfileContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },

})

function Personality() {
    const classes = useStyles()
    return <main className={classes.root}>

        hey:<CharacterProfileContainer/>
    </main>
}

export {Personality}