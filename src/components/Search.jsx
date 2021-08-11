import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {updateName, updateParams} from "../redux/reducer";
import {useHistory} from "react-router-dom";
import {useLocation} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),

        },
        margin:'1rem',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '100%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Search () {
    const classes = useStyles();

    const {push} = useHistory()

    const  {pathname,search} = useLocation()


    const params = useSelector(state => state.params)

    const name = useSelector(state => state.name)

    const dispatch = useDispatch()



    const handleSearch = (e) => {
        dispatch(updateParams(e))
        push({
                    pathname,
                    search: `?name=${params}`
                })
    }


    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>handleSearch(e.target.value)}
                value={params}
            />
            {/*<Button  onClick={handleSearch}> press</Button>*/}
        </div>
    )
}
export {Search}