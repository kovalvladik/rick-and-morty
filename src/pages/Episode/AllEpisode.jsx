import {EpisodeList} from "../../components/Episode/EpisodeList";
import { makeStyles} from "@material-ui/core";
import PaginationLink from "../../components/PaginationLink";



const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})



function AllEpisode () {
    const classes = useStyles()
return<main className={classes.root}>
    <EpisodeList/>
    <PaginationLink/>
</main>

}
export {AllEpisode}