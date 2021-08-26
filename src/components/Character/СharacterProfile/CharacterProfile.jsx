import React from "react";
import {List} from "@material-ui/core";

function CharacterProfile({name,status,species}) {

    return <>
        <List>
            {name}
            {status}
            {species}
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