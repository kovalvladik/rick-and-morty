import React from "react";
import {Card, Grid, List,Typography,CardContent} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import Preloader from "../../Preloader";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '3rem'
        // marginLeft:'3px'
    },
    media:{
        margitTop:'4rem',
    },
    content:{
        marginTop:'2rem'
    },

})

function CharacterProfile() {
    const classes = useStyles()
    const singleCharacter = useSelector(state => state.singleCharacter)
    const loading = useSelector(state => state.loading)
    const {name, status, species, episode} = singleCharacter
    return<Card className={classes.root}>
        <CardContent>
            <Typography>
            Name: {name}
            </Typography>
            <Typography>
            Status: {status}
            </Typography>
            <Typography>
            Species: {species}
            </Typography>

        </CardContent>
        <CardMedia className={classes.media}>
            <Typography>
                Episodes numbers with this character:
            </Typography>
            {episode !== undefined?
                <Grid container spacing={3} className={classes.content}>
                    {episode.map((episode) => (
                        <Button item xs={12} sm={6} md={6} lg={4} key={episode.id}{...episode}>
                            {episode.split('https://rickandmortyapi.com/api/episode/')}</Button>
                    ))}
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                </Grid>: <Preloader/>}
        </CardMedia>


        </Card>
}

export {CharacterProfile}