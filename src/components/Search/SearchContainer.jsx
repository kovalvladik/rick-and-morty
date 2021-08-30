import React, {useMemo} from 'react';
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateParams} from "../../redux/Reducers/reducer";
import {Search} from "./Search";

const SearchContainer = () => {

    const {push} = useHistory()

    const {pathname, search} = useLocation()

    const params = useSelector(state => state.params)

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        dispatch(updateParams(e))
        push({
            pathname,
            search: `?name=${params === e ? params : e}`
        })
    }

    return (
        <div>
            <Search handleSearch={handleSearch} params={params} />
        </div>
    );
};

export default SearchContainer;