import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import PlaceDetails from "../PlaceDetails/placeDetails"
import useStyles from "./style"
const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const places = [{ name: 'First plase' }, { name: 'Best vears' }]

    return (<div className={classes.container}>
        <Typography variant='h4'>
            Restorante, hotele dhe atraksione afer teje
        </Typography>
        <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurante</MenuItem>
                <MenuItem value="hotels">Hotele</MenuItem>
                <MenuItem value="attaractions">Attraksione</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (<Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
            </Grid>))}
        </Grid>


    </div>)
}

export default List