import {Button, Card, CardHeader, Grid, makeStyles} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 64px - 116px)',

    },
    item: {
        maxWidth: '300px',
        maxHeight: '500px',
        margin: '2rem',
    },
    card: {
        maxHeight: '500px',
        minHeight: '500px',

    },

})

function Main() {

    const classes = useStyles()

    return < Grid container className={classes.root} spacing={3}>
        <Grid item className={classes.item}>
            <Card className={classes.card}>
                <CardHeader title='Characters'/>
                <CardMedia>
                    <img style={{maxHeight: '400px', minHeight: '400px'}}
                         src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/New-Rick-and-Morty-trailer.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5'/>
                    <Button component={Link} to={`/character`}>
                        push
                    </Button>
                </CardMedia>
            </Card>
        </Grid>
        <Grid item className={classes.item}>
            <Card className={classes.card}>
                <CardHeader title='Episode'/>
                <CardMedia>
                    <img style={{maxHeight: '400px'}}
                         src='https://www.kindpng.com/picc/m/376-3760724_rick-and-morty-png-download-image-rick-and.png'/>
                    <Button component={Link} to={`/episode`}>
                        push
                    </Button>
                </CardMedia>
            </Card>
        </Grid>
        <Grid item className={classes.item}>
            <Card className={classes.card}>
                <CardHeader title='Location'/>
                <CardMedia>
                    <img style={{maxHeight: '400px'}}
                         src='https://www.denofgeek.com/wp-content/uploads/2021/03/Rick-and-Morty-Season-5-Trailer.jpg?resize=768%2C432'/>
                    <Button component={Link} to={`/location`}>
                        push
                    </Button>
                </CardMedia>
            </Card>
        </Grid>
    </Grid>
}

export {Main}