import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Button} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minHeight:'200px',
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

function LocationItem (props) {

    const {id,name,type,dimension,} = props

    const classes = useStyles();




    return(
        <Card className={classes.root}>
            <CardHeader
                title={name}


            />

            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p" >
                    {type}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" >
                    {dimension}
                </Typography>
            </CardContent>
            <Button component={Link} to={`/Location/${id}`}>
                <AccountCircleIcon/>
            </Button>
        </Card>
    );
}

export {LocationItem}