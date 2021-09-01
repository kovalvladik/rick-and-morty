import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {axiosCharacters} from "../../../redux/AsyncActions/characters";
import {CharacterList} from "./CharacterList";
import {getNewCharacter, getNewInfo} from "../../../redux/Reducers/reducer";

function CharacterListContainer() {

    const currentPage = useSelector(state => state.currentPage)

    const dispatch = useDispatch()

    const params = useSelector(state => state.params)

    useEffect(() => {
        dispatch({type:'LOAD_CHARACTER', args:{currentPage,params} })
    }, [currentPage, params])


    return <>
        <CharacterList/>
    </>
}

export {CharacterListContainer}