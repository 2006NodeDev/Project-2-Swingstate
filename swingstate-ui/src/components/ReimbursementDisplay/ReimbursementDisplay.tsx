import React, { FunctionComponent } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Reimbursement } from '../../models/Reimbursement';

interface IReimbursementDisplayProps {
    reimbursement: Reimbursement
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
                height: theme.spacing(40),
            },
        },
        paper: {
            backgroundColor: 'red',
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

export const ReimbursementDisplayComponent: FunctionComponent<IReimbursementDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    ReimbursementId : {props.reimbursement.reimbursementId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Author : {props.reimbursement.author}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Type : {props.reimbursement.type}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Amount : {props.reimbursement.amount}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Description : {props.reimbursement.description}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Status : {props.reimbursement.status}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Resolver : {props.reimbursement.resolver}
                </Typography>
            </Paper>
        </div >
    )
}