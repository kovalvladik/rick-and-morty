import {makeStyles} from "@material-ui/core";
import PaginationLink from "../../components/PaginationLilk/PaginationLink";
import {Search} from "../../components/Search";
import LocationListContainer from "../../components/Location/LocationList/LocationListContainer";

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
        <PaginationLink/>
    </main>
}

export {AllLocation}