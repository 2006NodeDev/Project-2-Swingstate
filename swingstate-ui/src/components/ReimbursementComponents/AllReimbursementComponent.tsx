import React, { FunctionComponent, useEffect, useState } from 'react'
import { Container, Grid, Paper, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { flamehazesocietyGetAllReimbursements } from '../../remote/swingstate-api/get-all-reimbursements';
import { Reimbursement } from '../../models/Reimbursement';
import { ReimbursementDisplayComponent } from '../ReimbursementDisplay/ReimbursementDisplay';

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

export const AllReimbursementComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allReimbursements, changeAllReimbursements] = useState<Reimbursement[]>([])

    useEffect(() => {
        const getUsers = async () => {
            let response = await flamehazesocietyGetAllReimbursements()
            changeAllReimbursements(response)
        }

        if (allReimbursements.length === 0) {

            getUsers()
        }
    })

    let reimbursementDisplays = allReimbursements.map((reimbursement) => {
        return <ReimbursementDisplayComponent key={'reimbursement-key-' + reimbursement.reimbursementId} reimbursement={reimbursement} />
    })

    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {reimbursementDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}