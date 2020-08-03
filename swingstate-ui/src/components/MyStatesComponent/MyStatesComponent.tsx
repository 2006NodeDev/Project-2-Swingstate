import React, { FunctionComponent} from 'react'
import {User} from '../../models/User'

interface IUserDisplayProps {
    user: User
  }

export const MyStatesComponent:FunctionComponent<IUserDisplayProps> = (props) => {
    
    return(
        <div>
            <h3>States go here</h3>
        </div>
    )
        

}