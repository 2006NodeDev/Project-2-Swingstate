import React, { FunctionComponent } from 'react'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { User } from '../../models/User';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  xsmall: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  small: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    margin: "auto",
  },
  medium: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    margin: "auto",
    marginTop: theme.spacing(5)
  },
  xlarge: {
    width: theme.spacing(48),
    height: theme.spacing(48),
    margin: "auto",
    marginTop: theme.spacing(5)
  }
}));

interface IPictureProps{
  user:User|null
}

export const ProfilePictureComponent: FunctionComponent<IPictureProps> = (props) => {

  const classes = useStyles();

    let userPofilePic = props.user.userImage
  return (
    <div><Avatar variant="circle" alt="user profile pic" src={userPofilePic} className={classes.small} /></div>
  )
}