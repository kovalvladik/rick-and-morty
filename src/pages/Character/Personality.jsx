import {makeStyles} from "@material-ui/core";
import CharacterProfileContainer from "../../components/Character/СharacterProfile/CraracterProfileContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },

})

console.log(
    'here'
)

function Personality() {
    const classes = useStyles()
    return <main className={classes.root}>
        <CharacterProfileContainer/>
    </main>
}

export {Personality}