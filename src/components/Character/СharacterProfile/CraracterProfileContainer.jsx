import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CharacterProfile} from "./CharacterProfile";

export default function CharacterProfileContainer() {

    const dispatch = useDispatch()

    const character = useSelector(state => state.singleCharacter)
    const loading = useSelector(state => state.loading)


    const {id} = useParams()

    useEffect(() => {
        dispatch({type:'LOAD_SINGLE_CHARACTER',args:id})
        console.log('111')
    }, [])

    return <>
        <CharacterProfile {...character}/>
    </>
}