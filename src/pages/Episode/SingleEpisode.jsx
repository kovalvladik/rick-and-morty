import {makeStyles} from "@material-ui/core";
import EpisodeInfoContainer from "../../components/Episode/EpisodeInfo/EpisodeInfoContainer";


const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function SingleEpisode() {
    const classes = useStyles()
    return <main className={classes.root}>

        hey:<EpisodeInfoContainer/>
</main>
}

export {SingleEpisode}