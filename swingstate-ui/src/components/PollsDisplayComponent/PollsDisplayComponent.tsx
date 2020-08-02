import React, { FunctionComponent } from 'react'
import { Poll } from '../../models/Poll'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface IPollsDisplayProps {
  Poll: Poll
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
      backgroundColor: '#E0E0E0',
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

export const PollsDisplayComponent: FunctionComponent<IPollsDisplayProps> = (props) => {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
      <Typography className={classes.typography} variant='h4'>
            pollId : {props.Poll.pollId}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            pollName : {props.Poll.pollName}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            pollDate : {props.Poll.pollDate}
          </Typography>
       
          <Typography className={classes.typography} variant='h4'>
          democraticPercent : {props.Poll.democraticPercent}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
          republicanPercent : {props.Poll.republicanPercent}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
          stateId : {props.Poll.stateId}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
          margin : {props.Poll.margin}
          </Typography>
        </Paper>
    </div >
  )
}