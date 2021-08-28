import {makeStyles} from "@material-ui/core";
import {Search} from "../../components/Search/Search";
import EpisodeListContainer from "../../components/Episode/EpiosdeList/EpisodeListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
})

function AllEpisode() {
    const classes = useStyles()
    return <main className={classes.root}>
        <Search/>
        <EpisodeListContainer/>
        <PaginationLinkContainer/>
    </main>

}

export {AllEpisode}