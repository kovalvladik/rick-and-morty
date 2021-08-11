import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentPage} from "../redux/reducer";

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

    const [page, setPage] = useState(+1);

    const handleChange = (event, value) => {
        setPage(value)
        push({
                    pathname,
                    search: `?page=${value}`
                })
        console.log( +page)
    };


    const newCurrentPage = (pageNumber) => {
        dispatch(updateCurrentPage(pageNumber))
    }

    const currentPageWithSearch = +search.split('=')[1]


    useEffect( async ()=>{
        if(currentPageWithSearch!==currentPage){
           await newCurrentPage(currentPageWithSearch)
        }

    }, [search])

    return (
        <div className={classes.root}>
            <Pagination  siblingCount={1} count={info.pages} page={currentPage} onChange={handleChange } />
        </div>
    );
}