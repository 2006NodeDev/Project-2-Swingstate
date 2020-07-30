import React, { FunctionComponent, SyntheticEvent} from 'react'
import { Button } from '@material-ui/core';
import { flamehazesocietyLogOut } from '../../remote/swingstate-api/logout';


export const LogoutComponent: FunctionComponent<any> = (props) => {

    const logoutUser = async (e: SyntheticEvent) => {

        e.preventDefault()

        let res = await flamehazesocietyLogOut()

        console.log(res)

        props.history.push(`/login`)
    } 


    return (
        <div>
            <Button id='logout' onClick={logoutUser}>Logout</Button>
        </div>
    )
}