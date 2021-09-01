import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LocationList} from "./LocationList";

export default function LocationListContainer() {

    const dispatch = useDispatch()

    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)

    useEffect(() => {
        dispatch({type:'LOAD_LOCATION',args:{currentPage,params} })
    }, [currentPage, params])

    return <>
        <LocationList/>
    </>
}