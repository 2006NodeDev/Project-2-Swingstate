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
import { deleteSub } from '../../remote/swingstate-api/delete-subscription';
import { FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

export const DeleteSubscriptionComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  let [userId, changeUserId] = useState(undefined)
  let [stateId, changeStateId,] = useState(undefined)

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
    checkedNC: false,
  });

  const updateUserId = (event: any) => {
    event.preventDefault()

    changeUserId(event.currentTarget.value)
  }

  const updateStateId = (event: any) => {
    event.preventDefault()

    changeStateId(event.currentTarget.value)
  }

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  const deleteSubSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    if (state.checkedAL) {
      stateId = 1
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedAZ) {
      stateId = 2
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedCO) {
      stateId = 3
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedGA) {
      stateId = 4
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedIA) {
      stateId = 5
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedKS) {
      stateId = 6
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedME) {
      stateId = 7
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedMI) {
      stateId = 8
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedMT) {
      stateId = 9
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
    }

    if (state.checkedNC) {
      stateId = 10
      let deletedSub: AdditionalInfo = {
        userId,
        stateId,
        updateFrequency: undefined,
        pollingThreshold: undefined,
      }

      await deleteSub(deletedSub)
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
          Unsubscribe
          </Typography>
        <form autoComplete="off" onSubmit={deleteSubSubmit} className={classes.form} noValidate>
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
              <h3>Please select all the states you wish to unsubscribe from</h3>
              <FormGroup row>
                <Tooltip title="Alabama"><FormControlLabel
                  control={<Switch checked={state.checkedAL} onChange={handleChange} name="checkedAL" />}
                  label="AL" />
                </Tooltip>
                <Tooltip title="Arizona"><FormControlLabel
                  control={<Switch checked={state.checkedAZ} onChange={handleChange} name="checkedAZ" color="primary" />}
                  label="AZ" />
                </Tooltip>
                <Tooltip title="Colorado"><FormControlLabel
                  control={<Switch checked={state.checkedCO} onChange={handleChange} name="checkedCO" />}
                  label="CO" />
                </Tooltip>
                <Tooltip title="Georgia"><FormControlLabel
                  control={<Switch checked={state.checkedGA} onChange={handleChange} name="checkedGA" color="primary" />}
                  label="GA" />
                </Tooltip>
                <Tooltip title="Iowa">
                  <FormControlLabel
                    control={<Switch checked={state.checkedIA} onChange={handleChange} name="checkedIA" />}
                    label="IA" />
                </Tooltip>
                <Tooltip title="Kansas"><FormControlLabel
                  control={<Switch checked={state.checkedKS} onChange={handleChange} name="checkedKS" color="primary" />}
                  label="KS" />
                </Tooltip>
                <Tooltip title="Maine"><FormControlLabel
                  control={<Switch checked={state.checkedME} onChange={handleChange} name="checkedME" />}
                  label="ME" />
                </Tooltip>
                <Tooltip title="Michigan"><FormControlLabel
                  control={<Switch checked={state.checkedMI} onChange={handleChange} name="checkedMI" color="primary" />}
                  label="MI" />
                </Tooltip>
                <Tooltip title="Montana"><FormControlLabel
                  control={<Switch checked={state.checkedMT} onChange={handleChange} name="checkedMT" />}
                  label="MT" />
                </Tooltip>
                <Tooltip title="North Carolina"><FormControlLabel
                  control={<Switch checked={state.checkedNC} onChange={handleChange} name="checkedNC" color="primary" />}
                  label="NC" />
                </Tooltip>
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
            Unsubscribe
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
