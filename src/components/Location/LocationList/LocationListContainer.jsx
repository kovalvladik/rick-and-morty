import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {axiosLocation} from "../../../redux/AsyncActions/location";
import {LocationList} from "./LocationList";

export default function LocationListContainer() {

    const dispatch = useDispatch()

    const currentPage = useSelector(state => state.currentPage)

    const params = useSelector(state => state.params)

    useEffect(() => {
        dispatch(axiosLocation(currentPage, params))
    }, [currentPage, params])

    return <>
        <LocationList/>
    </>
}