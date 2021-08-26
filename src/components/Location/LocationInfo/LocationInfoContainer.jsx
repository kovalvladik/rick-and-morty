import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addLike, removeLike} from "../../../redux/Reducers/reducer";
import {useParams} from "react-router-dom";
import {axiosSingleLocation} from "../../../redux/AsyncActions/singleLocation";
import {LocationInfo} from "./LocationInfo";


export default function LocationInfoContainer() {

    const location = useSelector(state => state.singleLocation)

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
        if (click === false) {
            dispatch(addLike())
        } else {
            dispatch(removeLike())
        }
    }

    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(() => {
        dispatch(axiosSingleLocation(id))
    }, [])
    return <>
        <LocationInfo handleClick={handleClick}{...location} />
    </>
}