import React, { FunctionComponent, useState, useEffect } from 'react';
import { UserDisplayComponent } from '../UserDisplayComponent/UserDisplay';
import { User } from '../../models/User';
import { useParams } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { mainListItems } from './listitems';
import { getUserById } from '../../remote/swingstate-api/getUsersById';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
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
    },
    toolbar: {
        paddingRight: 24,
        backgroundColor: 'red'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 550,
    },
}));

export const DashboardComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [userProfile, changeUserProfile] = useState<null | User>(null)
    let { user_id } = useParams()


    useEffect(() => {
        
        let getUser = async () => {

            let userInfo = await getUserById(user_id)
            changeUserProfile(userInfo)
        }

        if (!userProfile || userProfile.user_id !== +user_id) {

            getUser()
        }
    })

    return (
        (userProfile) ?
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <IconButton onClick={handleDrawerOpen}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={12} lg={12}>
                                <Paper className={fixedHeightPaper}>
                                <UserDisplayComponent user={userProfile}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
            :
            <div>
                <h3>User Not Found</h3>
            </div>
    )
}