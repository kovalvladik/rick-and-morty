import React from "react";
import {Grid, List, Typography} from "@material-ui/core";

function LocationInfo({handleClick, type, name, dimension, residents}) {

    return <>
        <List>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography>Name: {name}</Typography>
                    <Typography> Type: {type}</Typography>
                    <Typography>Dimension: {dimension}</Typography>
                    <Typography>Residents: {residents}</Typography>
                    <button onClick={() => {
                        handleClick()
                    }}>like
                    </button>

                </Grid>
            </Grid>


        </List>
    </>

}

export {LocationInfo}