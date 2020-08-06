import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import MapTwoToneIcon from '@material-ui/icons/MapTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PollTwoToneIcon from '@material-ui/icons/PollTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

 {/*did not include login, register, or my profile since you already have to be
  logged in to get to this menu and it appears that this menu only shows up on the profile page */}
export const mainListItems = ( 
  <div>                         
    <ListSubheader inset>Navigation:</ListSubheader>
    <ListItem button component={Link} to="/home">
      <ListItemIcon>
        <HomeTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>

    <ListItem button component={Link} to="/states">
      <ListItemIcon>
        <MapTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="All States" />
    </ListItem>

    <ListItem button component={Link} to="/polls">
      <ListItemIcon>
        <PollTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="All Polls" />
    </ListItem>

{/*temporarily deleted code for buttons to Edit Profile and MyStates because I need to
learn what to import to make the props work.  */}

    <ListItem button component={Link} to="/users">
      <ListItemIcon>
        <PeopleAltTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="All Users" />
    </ListItem>

    <ListItem button component={Link} to="/logout">
      <ListItemIcon>
        <ExitToAppTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);

/* Deleted reimbursement links in laurabranch_07
Let me know if you want me to move some of the links from above to secondary links.
export const secondaryListItems = (
  <div>

  </div>
);*/