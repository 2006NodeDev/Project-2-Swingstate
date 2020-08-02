import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';
import { State } from '../../models/State';
import clsx from 'clsx';
import { getAllStates } from '../../remote/swingstate-api/get-all-states';
import { StateDisplayComponent } from '../StateDisplayComponent/StateDisplayComponent';

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

export const AllStatesComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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

    let stateDisplays = allStates.map((state) => {
        return <StateDisplayComponent key={'state-key-' + state.stateId} state={state} />
    })

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {stateDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}