import React, { FunctionComponent, useState, useEffect } from 'react'
import { AllPollsComponent } from '../AllPollsComponent/AllPollsComponent'
import { useParams } from 'react-router-dom'
import { SwingStatesGetPollsbyId } from '../../remote/swingstate-api/getPollsbyID'
import { Poll } from '../../models/Poll'


export const PollsbyIDComponent:FunctionComponent <any> = (props) =>{
let [PollProfile, changeStateProfile] = useState <null | Poll> (null)
let {pollid} = useParams()

//will run after every single render
useEffect(()=>{
    let getpoll = async()=>{
        //await user userinfo and than call state 
        let pollInfo = await SwingStatesGetPollsbyId(pollid)
        changeStateProfile(pollInfo)
    }
    //havent gotten user profile yet
    if(!PollProfile|| PollProfile.pollId !== +pollid){
        getpoll()
    }
})

return (

(PollProfile)?

<AllPollsComponent poll={PollProfile} />
:
<div>
<h1>User Not Found</h1>
</div>
)
}