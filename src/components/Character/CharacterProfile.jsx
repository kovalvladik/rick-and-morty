import {useEffect} from "react";
import React from "react";
import {useParams} from 'react-router-dom'
import { List} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {axiosSingleCharacter} from "../../redux/AsyncActions/singleCharacter";

function CharacterProfile () {

    const character = useSelector(state => state.singleCharacter)

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect( async ()=>{
      await  dispatch(axiosSingleCharacter(id))
    },[])
        return<>
            <List >
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