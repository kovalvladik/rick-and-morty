
import {EpisodeInfo} from "../components/EpisodeInfo";
import { makeStyles} from "@material-ui/core";




const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function SingleEpisode(){
    const classes = useStyles()
    return<main className={classes.root}>

        hey:<EpisodeInfo/>
    </main>
}
export {SingleEpisode}