import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { Poll } from '../../models/Poll';
import { getAllPolls } from '../../remote/swingstate-api/get-all-polls';
import { PollDisplayComponent } from '../PollDisplayComponent/PollDisplayComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(5),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    fixedHeight: {
        height: 600,
    },
}));

export const AllPollsComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allPolls, changeAllPolls] = useState<Poll[]>([])

    useEffect(() => {
        const getStates = async () => {
            let response = await getAllPolls()
            changeAllPolls(response)
        }

        if (allPolls.length === 0) {
            getStates()
        }
    })

    let pollDisplays = allPolls.map((poll) => {
        return <PollDisplayComponent key={'poll-key-' + poll.pollId} poll={poll} />
    })

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {pollDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}