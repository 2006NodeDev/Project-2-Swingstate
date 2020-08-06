import React, { FunctionComponent } from 'react'
import { State } from '../../models/State';
import { makeStyles, Theme, createStyles, Typography, Card, CardMedia, CardContent, Link } from '@material-ui/core';

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
                width: theme.spacing(65),
                height: theme.spacing(50),
            },
        },
        card: {
            backgroundColor: '#E0E0E0',
            padding: theme.spacing(1),
            alignItems: 'left',
            overflow: 'auto',
            height: 605,
            width: 500
        },
        typography: {
            color: 'black',
            padding: theme.spacing(1),
            fontSize: 15
        },
        title: {
            fontFamily: 'Impact',
            fontSize: 20
        },
        media: {
            height: 400,
        }
    }),
);

export const StateDisplayComponent: FunctionComponent<IStateDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={props.state.stateImage}
                    title={props.state.stateName}
                />
                <CardContent>
                {/* <Typography className={classes.typography} variant='h4'>
                    StateId : {props.state.stateId}
                </Typography> */}
                <Typography className={classes.title} variant="h5" component="h2">
                    {props.state.stateName}
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
                    <Link href={props.state.registrationLink} color="inherit" target="_blank" underline="always">
                        Registration Link
                    </Link>
                </Typography>
                </CardContent>
            </Card>
        </div >
    )
}