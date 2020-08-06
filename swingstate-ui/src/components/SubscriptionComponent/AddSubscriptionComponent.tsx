import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AdditionalInfo } from '../../models/AdditionalInfo';
import { addSub } from '../../remote/swingstate-api/add-subscription';

export const AddSubscriptionComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  const [userId, changeUserId] = useState(null)
  const [stateId, changeStateId,] = useState(null)
  let [updateFrequency, changeUpdateFrequency] = useState(null)
  const [pollingThreshold, changePollingThreshold] = useState(null)

  const updateUserId = (event: any) => {
    event.preventDefault()

    changeUserId(event.currentTarget.value)
  }

  const updateStateId = (event: any) => {
    event.preventDefault()

    changeStateId(event.currentTarget.value)
  }

  const updateUpdateFrequency = (e: any) => {
    e.preventDefault()
    changeUpdateFrequency(e.currentTarget.value)
  }

  const updatePollingThreshold = (event: any) => {
    event.preventDefault()

    changePollingThreshold(event.currentTarget.value)
  }

  const addSubSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    let newSub: AdditionalInfo = {
      userId,
      stateId,
      updateFrequency,
      pollingThreshold,
    }

    await addSub(newSub)

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
          Subscribe
          </Typography>
        <form autoComplete="off" onSubmit={addSubSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userId"
                label="userId"
                name="userId"
                value={userId}
                onChange={updateUserId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="stateId"
                label="stateId"
                id="stateId"
                value={stateId}
                onChange={updateStateId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="update-frequency"
                label="Update Frequency"
                id="update-frequency"
                value={updateFrequency}
                onChange={updateUpdateFrequency}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="polling-threshold"
                label="polling Threshold"
                name="polling-threshold"
                value={pollingThreshold}
                onChange={updatePollingThreshold}
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
            Subscribe
            </Button>
        </form>
      </div>
    </Container>
  )
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
