import React, { FunctionComponent } from 'react'
import { User } from '../../models/User'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface IUserDisplayProps {
  user: User
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

export const UserDisplayComponent: FunctionComponent<IUserDisplayProps> = (props) => {
  let classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={4}>
      <Typography className={classes.typography} variant='h4'>
            UserId : {props.user.user_id}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            Username : {props.user.username}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            Home State : {props.user.homeState}
          </Typography>
          {/* <Typography className={classes.typography} variant='h4'>
            Last Name : {props.user.lastName}
          </Typography> */}
          <Typography className={classes.typography} variant='h4'>
            Email : {props.user.email}
          </Typography>
          <Typography className={classes.typography} variant='h4'>
            Role : {props.user.role}
          </Typography>
        </Paper>
    </div >
  )
}