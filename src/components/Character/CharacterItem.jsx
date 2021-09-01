import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import {Button} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minHeight:'450px',
        maxHeight:'450px',
        border:'none'
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    
}));

function CharacterItem (props) {

    const {id,name,status,species,type,gender,image} = props

    const classes = useStyles();

    const dispatch = useDispatch()



    return(
            <Card className={classes.root}>
                <CardHeader
                    title={name}
                    
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p" >
                        {type}
                    </Typography>
                </CardContent>
                <button onClick={() => dispatch({type:'LOAD_CHARACTER' })}> click me</button>
                <Button component={Link} to={`/character/${id}`}>
                    <AccountCircleIcon/>
                </Button>
            </Card>
        );
    }

export {CharacterItem}