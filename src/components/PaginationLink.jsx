import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentPage} from "../redux/Reducers/character_reducer";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),

        },

    },
}));

export default function PaginationLink() {

    const {push} = useHistory()

    const dispatch = useDispatch()

    const currentPage = useSelector(state => state.currentPage)

    const info = useSelector(state => state.info)

    const {pathname,search} = useLocation()

    const classes = useStyles();


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

    const currentPageWithSearch = +search.split('=')[1]


    useEffect(  ()=>{
        if(currentPageWithSearch!==currentPage){
            newCurrentPage(currentPageWithSearch)
        }

    }, [search])

    return (
        <div className={classes.root}>
            <Pagination  siblingCount={1} count={info.pages} page={currentPage} onChange={handleChange } />
        </div>
    );
}