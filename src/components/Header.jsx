
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton} from "@material-ui/core";
import {CharacterProfile} from "./CharacterProfile";




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

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}  >

                <Toolbar>
                    <IconButton color='inherit'   >
                    </IconButton>
                    <Typography align='center' variant="h6" className={classes.title}  >
                        React Food SPA
                    </Typography>
                    <CharacterProfile/>
                    <Button   color="inherit" >About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}