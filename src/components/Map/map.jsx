import React from 'react';
import useStyles from './style'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-qidth:600px)');
    const coordinates = { lat: 0, lng: 0 }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6lKoYfUtivEf_UNtxbU6K7SBfN3ICyI4' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map