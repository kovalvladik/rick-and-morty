import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },


})

function NotFound() {
    const classes = useStyles()
    return <main className={classes.root}>
        nothing here
    </main>
}

export {NotFound}