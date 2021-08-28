import {makeStyles} from "@material-ui/core";
import {Search} from "../../components/Search/Search";
import LocationListContainer from "../../components/Location/LocationList/LocationListContainer";
import PaginationLinkContainer from "../../components/PaginationLilk/PaginationLinkContainer";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
})

function AllLocation() {
    const classes = useStyles()
    return <main className={classes.root}>
        <Search/>
        <LocationListContainer/>
        <PaginationLinkContainer/>
    </main>
}

export {AllLocation}