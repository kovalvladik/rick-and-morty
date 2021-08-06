import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationLink(props) {
    const {info} = props
    const {push} = useHistory()
    const {pathname,search} = useLocation()
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value)
        push({
                    pathname,
                    search: `?page=${value}`
                })
    };

    return (
        <div className={classes.root}>
            <Pagination count={info.pages} page={page} onChange={handleChange} />
        </div>
    );
}