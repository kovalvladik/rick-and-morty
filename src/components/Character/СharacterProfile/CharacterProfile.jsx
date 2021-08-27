import React from "react";
import {Grid, List} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";

function CharacterProfile() {
    const singleCharacter = useSelector(state => state.singleCharacter)
    const {name, status, species, episode} = singleCharacter
    return <>
        <List>
            {name}
            {status}
            {species}
            <Grid container spacing={3}>
                {episode.length > 0
                    ? episode
                        .map((episode) => (
                            <Button item xs={12} sm={6} md={6} lg={4}>
                                {episode.split('https://rickandmortyapi.com/api/episode/')}</Button>
                        ))
                    : null}
            </Grid>
        </List>
    </>

}

export {CharacterProfile}