import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import './Marker.css';
import { State } from '../../models/State';

interface IStateDisplayProps {
    state: State
    lat: number
    lng: number
}

export const Marker: FunctionComponent<IStateDisplayProps> = (props) => {
    return (
        <div>
            <div
            className="pin bounce"
            style={{ backgroundColor: 'purple', cursor: 'pointer' }}
            title={props.state.votingLocation}
        />
        </div>
    )
}