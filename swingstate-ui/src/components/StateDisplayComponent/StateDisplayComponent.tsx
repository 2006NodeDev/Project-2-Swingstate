import React, { FunctionComponent } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { State } from '../../models/States'

interface IStateDisplayProps {
  State: State
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
        height: theme.spacing(35),
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

export const StateDisplayComponent: FunctionComponent<IStateDisplayProps> = (props) => {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
      <Typography className={classes.typography} variant='h4'>
            state_id : {props.State.state_id}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            state_name : {props.State.state_name}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
           democratic_candidate : {props.State.democratic_candidate}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            republican_candidate : {props.State.republican_candidate}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
           registration_link  : {props.State.registration_link}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            voting_location : {props.State.voting_location}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            picture_path : {props.State.picture_path}
          </Typography>
        </Paper>
    </div >
  )
}