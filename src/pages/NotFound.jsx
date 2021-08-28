import {Button, Card, CardHeader, CardMedia, List, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
    text: {
        padding: '3rem',

    },
    media:{
      display: 'flex',
      position:'relative',
    },

})

function NotFound() {
    const classes = useStyles()
    return <Card className={classes.root}>
            <Typography align='center' component='h1' className={classes.text}>
                It's not this page for your looking...
            </Typography>
        <CardMedia className={classes.media} >
            <img style={{maxHeight: '400px'}}
                 src='https://www.denofgeek.com/wp-content/uploads/2021/03/Rick-and-Morty-Season-5-Trailer.jpg?resize=768%2C432'/>
            <Button component={Link} to={`/`}>
                Go Home
            </Button>
        </CardMedia>
    </Card>
}

export {NotFound}