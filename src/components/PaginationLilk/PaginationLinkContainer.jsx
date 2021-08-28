import React, {useEffect} from 'react';
import PaginationLink from "./PaginationLink";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {updateCurrentPage} from "../../redux/Reducers/reducer";

const PaginationLinkContainer = () => {
    const {push} = useHistory()

    const dispatch = useDispatch()

    const currentPage = useSelector(state => state.currentPage)

    const info = useSelector(state => state.info)

    const {pathname, search} = useLocation()


    const handleChange = (event, value) => {
        push({
            pathname,
            search: `?page=${value}`
        })
    };

    const newCurrentPage = (pageNumber) => {
        dispatch(updateCurrentPage(pageNumber))
        push({
            pathname,
            search: `?page=${pageNumber}`
        })
    }

    const currentPageWithSearch = +search.split('=')[1] || 1

    useEffect(() => {
        if (currentPageWithSearch !== currentPage) {
            newCurrentPage(currentPageWithSearch)
        }

    }, [search])

    return (
        <div>
            <PaginationLink handleChange={handleChange}/>
        </div>
    );
};

export default PaginationLinkContainer;