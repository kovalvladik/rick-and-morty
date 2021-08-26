import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {axiosCharacters} from "../../../redux/AsyncActions/characters";
import {CharacterList} from "./CharacterList";

function CharacterListContainer() {

    const currentPage = useSelector(state => state.currentPage)

    const dispatch = useDispatch()

    const params = useSelector(state => state.params)

    useEffect(() => {
        dispatch(axiosCharacters(currentPage, params))
    }, [currentPage, params])


    return <>
        <CharacterList/>
    </>
}

export {CharacterListContainer}