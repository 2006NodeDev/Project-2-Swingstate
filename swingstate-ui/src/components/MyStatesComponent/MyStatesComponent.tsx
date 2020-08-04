import React, { FunctionComponent, useState, useEffect} from 'react'
import {User} from '../../models/User'
//import { useParams } from 'react-router-dom'
import { getAdditionalInfoById } from '../../remote/swingstate-api/get-additional-user-info'
import { useParams } from 'react-router-dom'
import { AdditionalInfo } from '../../models/AdditionalInfo'
import { getStateById } from '../../remote/swingstate-api/get-state-by-id'
import { State } from '../../models/State'
import { StateDisplayComponent } from '../StateDisplayComponent/StateDisplayComponent'
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';

interface IUserDisplayProps {
    additionalInfo: AdditionalInfo
  }

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
    paper: {
        padding: theme.spacing(5),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    fixedHeight: {
        height: 600,
    },
}));

export const MyStatesComponent:FunctionComponent<IUserDisplayProps> = (props) => {
   

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    let { user_id } = useParams()
    let [myStates, changeMyStates] = useState<State[]>([])

    useEffect(() => {
        
        const getAdditionalInfo = async () => {

            let AdditionalInfo:AdditionalInfo[] = await getAdditionalInfoById(user_id)
            let stateArray:State[] = []
            for(let i=0; i<AdditionalInfo.length; i++){
                let stateId:number = AdditionalInfo[i].stateId
                stateArray.push( await getStateById(stateId))
            } 
            changeMyStates(stateArray)

        }
        if (myStates.length === 0){
            getAdditionalInfo()
        }
    })
        let renderStates = myStates.map((state) => {
            return <StateDisplayComponent key={'state-key-' + state.stateId} state={state} />
        })
        
    return(
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {renderStates}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
        

}