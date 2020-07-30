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
import { flamehazesocietyCreateNewReimbursement } from '../../remote/swingstate-api/create-reimbursement';
import { toast } from 'react-toastify';

export const SubmitReimbursementComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  const [author, changeAuthor] = useState(null)
  const [amount, changeAmount,] = useState(null)
  const [description, changeDescription] = useState('')
  const [type, changeType] = useState(null)
  const [email, changeEmail] = useState('')

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

  const registerSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    let defaultSubmitDate: Date = new Date()

    if (!author || !amount || !description || !email || !type) {
      toast.error('Please fill in all fields', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
      })
    }

    let newReimbursement: Reimbursement = {
      reimbursementId: 0,
      author,
      amount,
      dateSubmitted: defaultSubmitDate,
      dateResolved: "2020-12-31",
      description,
      resolver: 0,
      status: 0,
      type,
      email
    }

    await flamehazesocietyCreateNewReimbursement(newReimbursement)

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
          Submit Reimbursement
          </Typography>
        <form autoComplete="off" onSubmit={registerSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="author"
                label="User Id"
                name="author"
                value={author}
                onChange={updateAuthor}
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
                required
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
                required
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
                required
                fullWidth
                id="type"
                label="Type = Lodging(1), Food(2), Travel(3), Other(4)"
                name="type"
                value={type}
                onChange={updateType}
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
            Submit
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
