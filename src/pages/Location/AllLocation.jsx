import {makeStyles} from "@material-ui/core";
import LocationListContainer from "../../components/Location/LocationList/LocationListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";
import SearchContainer from "../../components/Search/SearchContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
})

function AllLocation() {
    const classes = useStyles()
    return <main className={classes.root}>
        <SearchContainer/>
        <LocationListContainer/>
        <PaginationLinkContainer/>
    </main>
}

export {AllLocation}