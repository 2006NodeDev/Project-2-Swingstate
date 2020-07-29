import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Reimbursement } from '../../models/Reimbursement';
import { flamehazesocietyUpdateReimbursement } from '../../remote/swingstate-api/update-reimbursement';
import { toast } from 'react-toastify';

export const UpdateReimbursementComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const [reimbursementId, changeReimbursementId] = useState(null)
    const [author, changeAuthor] = useState(undefined)
    const [amount, changeAmount,] = useState(undefined)
    const [description, changeDescription] = useState(undefined)
    const [type, changeType] = useState(undefined)
    const [status, changeStatus] = useState(undefined)
    const [resolver, changeResolver,] = useState(undefined)
    const [dateSubmitted, changeDateSubmitted] = useState(undefined)
    const [dateResolved, changeDateResolved] = useState(undefined)
    const [email, changeEmail] = useState(undefined)

    const updateReimbursementId = (event: any) => {
        event.preventDefault()

        changeReimbursementId(event.currentTarget.value)
    }
    
    const updateAuthor = (event: any) => {
        event.preventDefault()

        changeAuthor(event.currentTarget.value)
    }

    const updateEmail = (event: any) => {
        event.preventDefault()

        changeEmail(event.currentTarget.value)
    }

    const updateAmount = (event: any) => {
        event.preventDefault()

        changeAmount(event.currentTarget.value)
    }

    const updateDescription = (e: any) => {
        e.preventDefault()
        changeDescription(e.currentTarget.value)
    }

    const updateType = (event: any) => {
        event.preventDefault()

        changeType(event.currentTarget.value)
    }

    const updateStatus = (event: any) => {
        event.preventDefault()

        changeStatus(event.currentTarget.value)
    }

    const updateResolver = (event: any) => {
        event.preventDefault()

        changeResolver(event.currentTarget.value)
    }

    const updateDateSubmitted = (e: any) => {
        e.preventDefault()
        changeDateSubmitted(e.currentTarget.value)
    }

    const updateDateResolved = (event: any) => {
        event.preventDefault()

        changeDateResolved(event.currentTarget.value)
    }

    const registerSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        if (!reimbursementId || !email) {
            toast.error('You must include an reimbursmentId and user email', {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
              })
        }

        let updateReimbursement: Reimbursement = {
            reimbursementId,
            author,
            amount,
            dateSubmitted,
            dateResolved,
            description,
            resolver,
            status,
            type,
            email
        }

        await flamehazesocietyUpdateReimbursement(updateReimbursement)

        props.history.push('/success')
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AssignmentIndIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Update Reimbursement
          </Typography>
                <form autoComplete="off" onSubmit={registerSubmit} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="reimbursement-id"
                                label="ReimbursementId"
                                name="reimbursement-id"
                                value={reimbursementId}
                                onChange={updateReimbursementId}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="User Email"
                                name="email"
                                value={email}
                                onChange={updateEmail}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="author"
                                label="Author"
                                name="author"
                                value={author}
                                onChange={updateAuthor}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="amount"
                                label="$ Amount"
                                name="amount"
                                value={amount}
                                onChange={updateAmount}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                value={description}
                                onChange={updateDescription}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="type"
                                label="Type # = Lodging(1), Food(2), Travel(3), Other(4)"
                                name="type"
                                value={type}
                                onChange={updateType}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="status"
                                label="Status # = Approved(1), Pending(2), Denied(3)"
                                name="status"
                                value={status}
                                onChange={updateStatus}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="resolver"
                                label="Resolver Id"
                                name="resolver"
                                value={resolver}
                                onChange={updateResolver}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="date-submitted"
                                label="Date Submitted"
                                name="date-submitted"
                                value={dateSubmitted}
                                onChange={updateDateSubmitted}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="date-resolved"
                                label="Date Resolved"
                                name="date-resolved"
                                value={dateResolved}
                                onChange={updateDateResolved}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Update
            </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                flamehazesociety
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: 'red',
        color: 'black',
        fontFamily: 'Impact',
        fontSize: 16,
    },
}));
