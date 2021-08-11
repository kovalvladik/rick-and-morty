import {LocationList} from "../../components/Location/LocationList";
import { makeStyles} from "@material-ui/core";

import PaginationLink from "../../components/PaginationLink";
import {Search} from "../../components/Search";



const useStyles = makeStyles({
    root:{
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})


function AllLocation () {
    const classes = useStyles()
return<main className={classes.root}>
    <Search/>
    <LocationList/>
    <PaginationLink/>
</main>
}
export {AllLocation}