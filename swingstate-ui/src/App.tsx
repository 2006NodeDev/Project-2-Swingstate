import React, { useState } from 'react';
import './App.css';
import { HomepageComponent } from './components/HomepageComponent/HomepageComponent';
import { NavBarComponent } from './components/NavBarComponent/NavBarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { User } from './models/User';
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { AllUsersComponent } from './components/AllUserComponent/AllUsersComponent';
import { RegisterComponent } from './components/RegisterComponent/RegisterComponent';
import { EditUserComponent } from './components/EditUserComponent/EditUserComponent';
import { ToastContainer } from 'react-toastify';
import { LogoutComponent } from './components/LogoutComponent/LogoutComponent';
import { SuccessComponent } from './components/SuccessComponent/SuccessComponent';
import { AllStatesComponent } from './components/AllStatesComponent/AllStatesComponent';
import { AllPollsComponent } from './components/AllPollsComponent/AllPollsComponent';
import { MyStatesComponent } from './components/MyStatesComponent/MyStatesComponent';
import { AddSubscriptionComponent } from './components/SubscriptionComponent/AddSubscriptionComponent';
import { DeleteSubscriptionComponent } from './components/SubscriptionComponent/DeleteSubscriptionComponent';


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
        <Route path='/states' component={AllStatesComponent} />
        <Route path='/polls' component={AllPollsComponent} />
        <Route path='/my-states/:user_id' component={MyStatesComponent} />
        <Route path='/success' component={SuccessComponent} />
        <Route path='/add-subscription' component={AddSubscriptionComponent} />
        <Route path='/delete-subscription' component={DeleteSubscriptionComponent} />
        <ToastContainer position='bottom-right'/>
      </Router>

    </div>
  );
}

export default App;