import React from "react";
import {Grid, List} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import Preloader from "../../Preloader";

function CharacterProfile() {
    const singleCharacter = useSelector(state => state.singleCharacter)
    const {name, status, species, episode} = singleCharacter
    return<List>
            {name}
            {status}
            {species}
                {episode !== undefined?
                    <Grid container spacing={3}>
                        {episode.map((episode) => (
                            <Button item xs={12} sm={6} md={6} lg={4} key={episode.id}{...episode}>
                                {episode.split('https://rickandmortyapi.com/api/episode/')}</Button>
                        ))}
                        {/* eslint-disable-next-line react/jsx-no-undef */}
            </Grid>: <Preloader/>}
        </List>
}

export {CharacterProfile}