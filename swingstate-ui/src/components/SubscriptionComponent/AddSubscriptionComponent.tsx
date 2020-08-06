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
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';

export const AddSubscriptionComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  let [userId, changeUserId] = useState(null)
  let [stateId, changeStateId,] = useState(null)
  let [updateFrequency, changeUpdateFrequency] = useState(null)
  let [pollingThreshold, changePollingThreshold] = useState(null)

  const [state, setState] = React.useState({
    checkedAL: false,
    checkedAZ: false,
    checkedCO: false,
    checkedGA: false,
    checkedIA: false,
    checkedKS: false,
    checkedME: false,
    checkedMI: false,
    checkedMT: false,
    checkedND: false,
  });

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

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  const addSubSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (state.checkedAL) {
      stateId = 1
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedAZ) {
      stateId = 2
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedCO) {
      stateId = 3
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedGA) {
      stateId = 4
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedIA) {
      stateId = 5
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedKS) {
      stateId = 6
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedME) {
      stateId = 7
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedMI) {
      stateId = 8
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedMT) {
      stateId = 9
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

    if (state.checkedND) {
      stateId = 10
      let newSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency,
        pollingThreshold,
      }

      await addSub(newSub)
    }

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
                label="userId (Your ID)"
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
                name="update-frequency"
                label="Update Frequency (Valid # of days are: 3, 7, 14, 21)"
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
                label="Polling Threshold (Valid percentages are: 10, 25, 50, 75)"
                name="polling-threshold"
                value={pollingThreshold}
                onChange={updatePollingThreshold}
              />
            </Grid>
            <Grid item xs={12}>
              <h3>Please select all the states you wish to subscribe to</h3>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={state.checkedAL} onChange={handleChange} name="checkedAL" />}
                  label="Alabama" />
                <FormControlLabel
                  control={<Switch checked={state.checkedAZ} onChange={handleChange} name="checkedAZ" color="primary" />}
                  label="Arizona" />
                <FormControlLabel
                  control={<Switch checked={state.checkedCO} onChange={handleChange} name="checkedCO" />}
                  label="Colarado" />
                <FormControlLabel
                  control={<Switch checked={state.checkedGA} onChange={handleChange} name="checkedGA" color="primary" />}
                  label="Georgia" />
                <FormControlLabel
                  control={<Switch checked={state.checkedIA} onChange={handleChange} name="checkedIA" />}
                  label="Iowa" />
                <FormControlLabel
                  control={<Switch checked={state.checkedKS} onChange={handleChange} name="checkedKS" color="primary" />}
                  label="Kansas" />
                <FormControlLabel
                  control={<Switch checked={state.checkedME} onChange={handleChange} name="checkedME" />}
                  label="Maine" />
                <FormControlLabel
                  control={<Switch checked={state.checkedMI} onChange={handleChange} name="checkedMI" color="primary" />}
                  label="Michigan" />
                <FormControlLabel
                  control={<Switch checked={state.checkedMT} onChange={handleChange} name="checkedMT" />}
                  label="Montana" />
                <FormControlLabel
                  control={<Switch checked={state.checkedND} onChange={handleChange} name="checkedND" color="primary" />}
                  label="N. Carolina" />
              </FormGroup>
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
