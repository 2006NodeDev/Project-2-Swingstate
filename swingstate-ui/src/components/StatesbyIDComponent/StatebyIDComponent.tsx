import React, { FunctionComponent, useState, useEffect } from 'react'
import { AllStatesComponent } from '../AllStateComponent/AllStateComponent'
import { State } from '../../Models/States'
import { useParams } from 'react-router-dom'
import { SwingStatesGetStatesbyId } from '../../remote/swingstate-api/getStatesbyID'


export const StatesbyIDComponent:FunctionComponent <any> = (props) =>{
let [StateProfile, changeStateProfile] = useState <null | State> (null)
let {stateid} = useParams()

//will run after every single render
useEffect(()=>{
    let getState = async()=>{
        //await user userinfo and than call state 
        let userInfo = await SwingStatesGetStatesbyId(stateid)
        changeStateProfile(userInfo)
    }
    //havent gotten user profile yet
    if(!StateProfile|| StateProfile.state_id !== +stateid){
        getState()
    }
})

return (

(StateProfile)?

<AllStatesComponent state={StateProfile} />
:
<div>
<h1>User Not Found</h1>
</div>
)
}