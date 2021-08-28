import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {useSelector} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),

        },

    },
}));

export default function PaginationLink({handleChange}) {

    const classes = useStyles();

    const currentPage = useSelector(state => state.currentPage)

    const info = useSelector(state => state.info)

    return (
        <div className={classes.root}>
            <Pagination siblingCount={1} count={info.pages} page={currentPage} onChange={handleChange}/>
        </div>
    );
}