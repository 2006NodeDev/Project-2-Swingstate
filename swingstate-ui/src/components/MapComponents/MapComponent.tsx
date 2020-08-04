import React, { useState, FunctionComponent, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { Marker } from './Marker';
import { State } from '../../models/State';
import { getAllStates } from '../../remote/swingstate-api/get-all-states';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '75vh',
            width: '100%'
        }
    })
);

export const Map: FunctionComponent<any> = (props) => {
    let classes = useStyles()
    const [center, setCenter] = useState({ lat: 38.633908, lng: -95.299505 });
    const [zoom, setZoom] = useState(4.7);
    let [allStates, changeAllStates] = useState<State[]>([])

    useEffect(() => {
        const getStates = async () => {
            let response = await getAllStates()
            changeAllStates(response)
        }

        if (allStates.length === 0) {
            getStates()
        }
    })

    let statePins = allStates.map((state) => {
        return <Marker
            key={'state-key-' + state.stateId}
            state={state}
            lat={state.latitude}
            lng={state.longitude}
        />
    })

    const getMapOptions = (maps: any) => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };

    return (
        <div className={classes.root}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD00vmLSx6khN-KYLWxtmWFTWME-cilnMU' }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                {statePins}
            </GoogleMapReact>
        </div>
    )
}