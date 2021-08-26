import React from "react";
import {List} from "@material-ui/core";
import {useSelector} from "react-redux";

function CharacterProfile() {

    const character = useSelector(state => state.singleCharacter)

    return <>
        <List>
            {character.name}
            {character.status}
            {character.species}
            {/*{*/}
            {/*    episode*/}
            {/*        ? episode*/}
            {/*            .split(",")*/}
            {/*            .map((episode) => (*/}
            {/*                <Button*/}
            {/*                    size='small'*/}
            {/*                    variant='outlined'*/}
            {/*                    style={{ marginRight: 5 }}*/}
            {/*                >{episode}</Button>*/}
            {/*            ))*/}
            {/*        : null*/}
            {/*}*/}


        </List>
    </>

}

export {CharacterProfile}