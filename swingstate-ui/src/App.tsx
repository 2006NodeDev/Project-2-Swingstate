import React, { useState } from 'react';
import './App.css';
import { HomepageComponent } from './components/HomepageComponent/HomepageComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { User } from './models/User';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { AllUsersComponent } from './components/AllUserComponent/AllUsersComponent';
import { AllStatesComponent } from './components/AllStateComponent/AllStateComponent';
import { RegisterComponent } from './components/RegisterComponent/RegisterComponent';
import { EditUserComponent } from './components/EditUserComponent/EditUserComponent';
import { ToastContainer } from 'react-toastify';
import { LogoutComponent } from './components/LogoutComponent/LogoutComponent';
import { SubmitReimbursementComponent } from './components/ReimbursementComponents/SubmitReimbursementComponent';
import { UpdateReimbursementComponent } from './components/ReimbursementComponents/UpdateReimbursementComponent';
import { AllReimbursementComponent } from './components/ReimbursementComponents/AllReimbursementComponent';
import { SuccessComponent } from './components/SuccessComponent/SuccessComponent';


function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (
    <div className="App">
      <Router>
       
        <Redirect to='/home' />
        
        <NavBarComponent user={currentUser}/>
        
        <Route path='/home'>
          <HomepageComponent/>
        </Route>
  
        <Route path='/login' render={(props) => (<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/register' component={RegisterComponent} />
        <Route path='/profile/:user_id' component={ProfileComponent} />
        <Route path='/edit/:user_id' component={EditUserComponent}/>
        <Route path='/users' component={AllUsersComponent} />
        <Route path='/logout' component={LogoutComponent} />
        <Route path='/reimbursement/submit' component={SubmitReimbursementComponent} />
        <Route path='/reimbursement/update' component={UpdateReimbursementComponent} />
        <Route path='/reimbursements' component={AllReimbursementComponent} />
        <Route path='/success' component={SuccessComponent} />
        <Route path='/states' component={AllStatesComponent} />

        <ToastContainer position='bottom-right'/>
      </Router>

    </div>
  );
}

export default App;