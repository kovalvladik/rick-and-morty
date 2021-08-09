
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
    },
    root1: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SearchParams() {
    const classes = useStyles();

    const options = [
        'Show some love to Material-UI',
        'Show all notification content',
        'Hide sensitive notification content',
        'Hide all notification content',
    ];


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"

                        control={<Checkbox />}
                        label="Search Parameters"
                    />
                </AccordionSummary>
                <AccordionDetails>


                    <div className={classes.root}>
                    <List component="nav" aria-label="Device settings">
                    <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    onClick={handleClickListItem}
                    >
                    <ListItemText primary="When device is locked" secondary={options[selectedIndex]} />
                    </ListItem>
                    </List>
                    <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                {options.map((option, index) => (
                    <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    >
                {option}
                    </MenuItem>
                    ))}
                    </Menu>
                    </div>



                </AccordionDetails>
            </Accordion>
        </div>
    );
}