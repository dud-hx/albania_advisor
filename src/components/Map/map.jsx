import React from 'react';
import useStyles from './style'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';

const Map = ({
    setCoordinates,
    setBounds,
    coordinates
}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-qidth:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB6lKoYfUtivEf_UNtxbU6K7SBfN3ICyI4' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.cente.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.margin.sw })
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map