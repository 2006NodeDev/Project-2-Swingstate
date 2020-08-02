import React, { FunctionComponent } from 'react'
import { makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';
import { Poll } from '../../models/Poll';

interface IPollDisplayProps {
    poll: Poll
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: "auto",
                marginTop: theme.spacing(5),
                width: theme.spacing(60),
                height: theme.spacing(40),
            },
        },
        paper: {
            backgroundColor: '#E0E0E0',
            padding: theme.spacing(1),
            overflow: 'auto',
        },
        typography: {
            color: 'black',
            padding: theme.spacing(1),
            fontFamily: 'monospace',
            fontSize: 18
        }
    }),
);

export const PollDisplayComponent: FunctionComponent<IPollDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    PoleId : {props.poll.pollId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    StateId : {props.poll.stateId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Pole Name : {props.poll.pollName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Poll Date : {props.poll.pollDate}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Democratic Percent : {props.poll.democraticPercent}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Republican Percent : {props.poll.republicanPercent}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Margin : {props.poll.margin}
                </Typography>
            </Paper>
        </div >
    )
}