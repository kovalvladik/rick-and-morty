import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {axiosSingleCharacter} from "../../../redux/AsyncActions/singleCharacter";
import {CharacterProfile} from "./CharacterProfile";


export default function CharacterProfileContainer() {

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(axiosSingleCharacter(id))
    }, [])
    return <>
        <CharacterProfile/>
    </>
}