import React, { FunctionComponent, useState } from 'react';
import { makeStyles, createStyles, Theme, Paper, Typography } from '@material-ui/core';
import './Marker.css';
import { State } from '../../models/State';
import InfoWindow from 'google-map-react';

interface IMapProps {
    state: State
    lat: number
    lng: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            height: 65,
            width: 150,
        },
        title: {
            fontSize:12,
            fontWeight: "bold"
        },
        typography: {
            color: 'black',
            fontSize: 10,
        }
    }),
);

export const Marker: FunctionComponent<IMapProps> = (props) => {
    let classes = useStyles()
    const [isOpen, setOpen] = useState(false);

    const markerClicked = (event: React.MouseEvent<HTMLDivElement>) => {
        setOpen(true)
    }
    const markerClose = () => {
        setOpen(false)
    }

    return (
        (isOpen) ?
            <div>
                <div
                    className="pin bounce"
                    style={{ backgroundColor: 'purple', cursor: 'pointer' }}
                    title={props.state.votingLocation}
                    onClick={markerClicked}
                />
                <InfoWindow
                    onClick={markerClose}
                >
                    <Paper className={classes.paper} elevation={6}>
                        <Typography className={classes.title} >
                            {props.state.stateName}
                        </Typography>
                        <Typography className={classes.typography}>
                            Dem Candidate: {props.state.democraticCandidate}
                        </Typography>
                        <Typography className={classes.typography}>
                            Rep Candidate: {props.state.republicanCandidate}
                        </Typography>
                    </Paper>
                </InfoWindow>
            </div>
            :
            <div>
                <div
                    className="pin bounce"
                    style={{ backgroundColor: 'purple', cursor: 'pointer' }}
                    title={props.state.votingLocation}
                    onClick={markerClicked}
                />
            </div>
    )
}