
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {useSelector} from "react-redux";




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor:'#afc2cb',

    },
    title: {
        flexGrow: 1,
        position:'center',
    },
    buttonHome:{
        // backgroundColor:'whitesmoke',
    },


});

export default function Header() {
    const classes = useStyles();
    const like = useSelector(state => state.like)
    console.log(like)


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}  >

                <Toolbar>
                    <IconButton color='inherit'  component={Link} to={'/'}  >
                        <HomeIcon />
                    </IconButton>
                    <Typography align='center' variant="h6" className={classes.title}  >
                        Rick and Morty SPA
                    </Typography>
                    <Typography>
                        Favorites: {like.length}
                    </Typography>
                    <Button   color="inherit"  component={Link} to={'/about'}>About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}