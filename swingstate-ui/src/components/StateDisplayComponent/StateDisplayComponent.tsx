import React, { FunctionComponent } from 'react'
import { State } from '../../models/State';
import { makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';

interface IStateDisplayProps {
    state: State
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: "auto",
                marginTop: theme.spacing(5),
                width: theme.spacing(40),
                height: theme.spacing(35),
            },
        },
        paper: {
            backgroundColor: '#E0E0E0',
            padding: theme.spacing(1)
        },
        typography: {
            color: 'black',
            padding: theme.spacing(1),
            fontFamily: 'monospace',
            fontSize: 18
        }
    }),
);

export const StateDisplayComponent: FunctionComponent<IStateDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    StateId : {props.state.stateId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    State : {props.state.stateName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Democratic Candidate : {props.state.democraticCandidate}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Republican Candidate : {props.state.republicanCandidate}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Voting Location : {props.state.votingLocation}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Registration Link : {props.state.registrationLink}
                </Typography>
            </Paper>
        </div >
    )
}