
import { makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },

})
function About () {
    const classes = useStyles()
return<Typography style={{padding:'3rem'}} gutterBottom variant='h5' className={classes.root}>
    This website was made with React, Material UI and simple free API, for personal portfolio Kovalevskiy Vladislavs.
    If you want to connect with me, you can use Telegram.
</Typography>
}
export {About}