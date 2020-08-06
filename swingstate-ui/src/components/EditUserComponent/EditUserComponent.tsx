import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { editCurrentUser } from '../../remote/swingstate-api/edit-user';
import { Grid, makeStyles, Container } from '@material-ui/core';
import { useParams } from 'react-router';
import { User } from '../../models/User';
import { toast } from 'react-toastify';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    grid: {
        padding: theme.spacing(5),
        margin: 'auto',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        flexWrap: 'wrap',

    },
    fixedHeight: {
        height: 600,
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

export const EditUserComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const { user_id } = useParams()
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    const [homeState, changeHomeState] = useState('')
    const [email, changeEmail] = useState('')
    const [role, changeRole] = useState('')
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
    let [userImage, changeUserImage] = useState(undefined)

    const updateUsername = (event: any) => {
        event.preventDefault()

        changeUsername(event.currentTarget.value)
    }

    const updatePassword = (event: any) => {
        event.preventDefault()

        changePassword(event.currentTarget.value)
    }

    const updateHomeState = (event: any) => {
        event.preventDefault()

        changeHomeState(event.currentTarget.value)
    }

    const updateEmail = (event: any) => {
        event.preventDefault()

        changeEmail(event.currentTarget.value)
    }

    const updateRole = (event: any) => {
        event.preventDefault()

        changeRole(event.currentTarget.value)
    }

    const handleChange = (event: any) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    const updateUserImage = (e: any) => {
        let file: File = e.currentTarget.files[0]
        let reader = new FileReader()
    
        reader.readAsDataURL(file)
    
        reader.onload = () => {
          console.log(reader.result)
          changeUserImage(reader.result)
        }
      }

    const editSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
       
        console.log(userImage);

        if (!user_id) {
            toast.error('You must include a userId')
        }
        
        {/*Will need to edit this model and the db to include states that the user 
        is following.  Will need a states array. */}
        let editUser:User = {
            user_id,
            username,
            password,
            homeState,
            email,
            userImage,
            role
        }
        await editCurrentUser(editUser)

        props.history.push(`/profile/${user_id}`)
    }
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <form className={classes.form} autoComplete="off" onSubmit={editSubmit}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={12} lg={6} className={classes.grid}>
                            <TextField id="username" label="Username" value={username} onChange={updateUsername} />
                            <TextField id="password" type='password' label="Password" value={password} onChange={updatePassword} />
                            <TextField id="homestate" label="Home State" value={homeState} onChange={updateHomeState} />
                            {/* <TextField id="lastname" label="Last Name" value={lastName} onChange={updateLastname} /> */}
                            <TextField id="email" type='email' label="Email" value={email} onChange={updateEmail} />
                            <FormGroup row>
            <FormControlLabel
                control={<Switch checked={state.checkedAL} onChange={handleChange} name="checkedAL" />}
                label="Alabama"/>
            <FormControlLabel
                control={<Switch checked={state.checkedAZ} onChange={handleChange} name="checkedAZ" color="primary" />}
                label="Arizona"/>
            <FormControlLabel
                control={<Switch checked={state.checkedCO} onChange={handleChange} name="checkedCO" />}
                label="Colarado"/>
            <FormControlLabel
                control={<Switch checked={state.checkedGA} onChange={handleChange} name="checkedGA" color="primary" />}
                label="Georgia"/>
            <FormControlLabel
                control={<Switch checked={state.checkedIA} onChange={handleChange} name="checkedIA" />}
                label="Iowa"/>   
            <FormControlLabel
                control={<Switch checked={state.checkedKS} onChange={handleChange} name="checkedKS" color="primary" />}
                label="Kansas"/>
            <FormControlLabel
                control={<Switch checked={state.checkedME} onChange={handleChange} name="checkedME" />}
                label="Maine"/>
            <FormControlLabel
                control={<Switch checked={state.checkedMI} onChange={handleChange} name="checkedMI" color="primary" />}
                label="Michigan"/>
            <FormControlLabel
                control={<Switch checked={state.checkedMT} onChange={handleChange} name="checkedMT" />}
                label="Montana"/>
            <FormControlLabel
                control={<Switch checked={state.checkedND} onChange={handleChange} name="checkedND" color="primary" />}
                label="N. Carolina"/>
        </FormGroup>
                            <label htmlFor='file'>Profile Pic</label>
                            <input type='file' name='file' accept='image/*' onChange={updateUserImage} />
                            <img alt="" src={userImage} />
                            <Button className={classes.submit} type='submit' variant="contained" color="primary">Update</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}