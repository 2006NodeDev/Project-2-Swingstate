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
import { Poll } from '../../models/Poll';
import { createNewPoll } from '../../remote/swingstate-api/create-new-poll';

export const NewPollComponenet: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  const [pollName, changepollName] = useState('')
  const [democraticPercent, changedemocraticPercent] = useState('')
  const [republicanPercent, changerepublicanPercent] = useState('')
  const [stateId, changestateId] = useState('')


  const updatepollName = (event: any) => {
    event.preventDefault()

    changepollName(event.currentTarget.value)
  }


  const updatedemocraticPercent = (event: any) => {
    event.preventDefault()

    changedemocraticPercent(event.currentTarget.value)
  }

  const updaterepublicanPercent = (event: any) => {
    event.preventDefault()

    changerepublicanPercent(event.currentTarget.value)
  }
  const updatestateId = (event: any) => {
    event.preventDefault()

    changestateId(event.currentTarget.value)
  }


  const registerSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()


    let newPoll: Poll = {
        pollName:pollName,
        democraticPercent: parseInt(democraticPercent),
        republicanPercent: parseInt(republicanPercent),
        stateId: parseInt(stateId)
    }

    await createNewPoll(newPoll)

    props.history.push('/polls')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add a New Poll
          </Typography>
        <form autoComplete="off" onSubmit={registerSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="pollName"
                label="pollName"
                name="pollName"
                value={pollName}
                onChange={updatepollName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="democraticPercent"
                label="Democratic Percent (number)"
                name="democraticPercent"
                value={democraticPercent}
                onChange={updatedemocraticPercent}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="republicanPercent"
                label="Republican Percent (number)"
                name="republicanPercent"
                value={republicanPercent}
                onChange={updaterepublicanPercent}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="stateId"
                label="stateId"
                name="stateId"
                value={stateId}
                onChange={updatestateId}
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
            Submit the Poll
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
    backgroundColor: "#600080",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#E0E0E0',
    color: 'black',
    fontFamily: 'Impact',
    fontSize: 16,
  },
}));
