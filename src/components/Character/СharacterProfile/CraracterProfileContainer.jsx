import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {axiosSingleCharacter} from "../../../redux/AsyncActions/singleCharacter";
import {CharacterProfile} from "./CharacterProfile";

export default function CharacterProfileContainer() {

    const dispatch = useDispatch()

    const character = useSelector(state => state.singleCharacter)

    const {id} = useParams()

    useEffect(() => {
        dispatch(axiosSingleCharacter(id))
    }, [])
    return <>
        <CharacterProfile {...character}/>
    </>
}