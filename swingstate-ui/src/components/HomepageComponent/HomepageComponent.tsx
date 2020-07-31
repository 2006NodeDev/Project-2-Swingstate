import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0),
            },
        },
        xsImage: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        sImage: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        mImage: {
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
        lImage: {
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
        xlImage: {
            width: theme.spacing(50),
            height: theme.spacing(50),
        },
        container: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),

        },
        h2: {
            fontSize: 24,

        },
        h3: {
            fontSize: 15,
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10)

        },
        button: {
            fontSize: 18,
            width: theme.spacing(15),
            height: theme.spacing(10),
            backgroundColor: '#E0E0E0',
            justifyContent: 'center',
            color: 'black',
            fontFamily: 'monospace',
            fontWeight: 'bold',

        },
    })
);

export function HomepageComponent(props: any) {

    let classes = useStyles()

    return (

        <div>
            <Grid container spacing={6}>
                <Grid item xs={12} md={12} lg={12}>
                    <h2 className={classes.h2}>Welcome to Swingstate!</h2>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <h3 className={classes.h3}>Swingstate is an application designed to provide everything you need to know about swing states in the 2020 election.</h3>
                </Grid>
                {/*<Grid item xs={12} md={12} lg={4}>
                    <img className={classes.mImage} alt='homepage-img' src='https://files.yande.re/sample/26957b25082ddfeb176c032a8260bcae/yande.re%2020349%20sample%20friagne%20margery_daw%20marianne%20ootsuka_mai%20sakai_yuuji%20shakugan_no_shana%20shana%20sword.jpg' />
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <img className={classes.mImage} alt='homepage-img' src='https://konachan.com/sample/35614bd7a40049b2a4dc65ef70c76170/Konachan.com%20-%2042736%20sample.jpg' />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <h3 className={classes.h3}>Several years ago, there was conflict between humans and vicious demons called Crimson Denziens, who sought to devour their existances. Warriors known as Flame Hazes were chosen by the Crimson Lords to mantain balance. A great war was fought between them and the demons, but eventually they became victorious and the universe was reset, causing the existance of these demons as well as the Flame Hazes to be forgotten to all outside of the new world known as Xanadu. Ten years later, there has been peace between the humans and Crimson Denziens, but there are still those who defy the grand orders and fight against them. Therefore, the job of the Flame Hazes will never be done and to that end, more brave warriors are invited to answer the call, and become the symbol of hope and harbingers of peace, as Flame Hazes.</h3>
                </Grid> */}
                <Grid item xs={12} md={12} lg={6}>
                    <Button className={classes.button} variant="outlined" color="primary" component={Link} to="/register">Sign Up!</Button>
                </Grid>
                <Grid item xs={12} md={12} lg={6}>
                    <Button className={classes.button} variant='outlined' color="primary" component={Link} to="/login">Log In!</Button>
                </Grid>
            </Grid>
        </div>

    );
}