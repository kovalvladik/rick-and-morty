import {makeStyles} from "@material-ui/core";
import EpisodeListContainer from "../../components/Episode/EpiosdeList/EpisodeListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";
import SearchContainer from "../../components/Search/SearchContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
})

function AllEpisode() {
    const classes = useStyles()
    return <main className={classes.root}>
        <SearchContainer/>
        <EpisodeListContainer/>
        <PaginationLinkContainer/>
    </main>

}

export {AllEpisode}