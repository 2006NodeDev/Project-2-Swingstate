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
import { deleteSub } from '../../remote/swingstate-api/delete-subscription';

export const DeleteSubscriptionComponent: FunctionComponent<any> = (props) => {

  const classes = useStyles();

  const [userId, changeUserId] = useState(undefined)
  const [stateId, changeStateId,] = useState(undefined)

  const updateUserId = (event: any) => {
    event.preventDefault()

    changeUserId(event.currentTarget.value)
  }

  const updateStateId = (event: any) => {
    event.preventDefault()

    changeStateId(event.currentTarget.value)
  }

  const deleteSubSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    let deletedSub: AdditionalInfo = {
      userId,
      stateId,
      updateFrequency: undefined,
      pollingThreshold: undefined,
    }

    await deleteSub(deletedSub)

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
