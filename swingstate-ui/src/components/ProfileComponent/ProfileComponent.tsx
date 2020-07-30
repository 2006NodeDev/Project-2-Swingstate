import React, { FunctionComponent} from 'react';
import { DashboardComponent } from '../DashboardComponent/dashboard';

export const ProfileComponent: FunctionComponent<any> = (props) => {

    
    return (
        <div>
            <DashboardComponent user={props.user}/>
        </div>
    )
}