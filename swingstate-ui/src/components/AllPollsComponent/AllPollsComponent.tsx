import React, { FunctionComponent, useEffect, useState } from 'react'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { SwingStateGetAllPolls } from '../../remote/swingstate-api/getAllPolls';
import { Poll } from '../../models/Poll';
import { PollsDisplayComponent } from '../PollsDisplayComponent/PollsDisplayComponent';

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
        const getPolls = async () => {
            let response = await  SwingStateGetAllPolls()
            changeAllPolls(response)
        }

        if (allPolls.length === 0) {

            getPolls()
        }
    })

    let pollDisplays = allPolls.map((poll) => {
        return <PollsDisplayComponent key={'poll-key-' + poll.pollId} Poll={poll} />
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