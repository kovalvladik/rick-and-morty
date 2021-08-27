import {makeStyles} from "@material-ui/core";
import PaginationLink from "../../components/PaginationLilk/PaginationLink";
import {Search} from "../../components/Search/Search";
import EpisodeListContainer from "../../components/Episode/EpiosdeList/EpisodeListContainer";

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
        <PaginationLink/>
    </main>

}

export {AllEpisode}