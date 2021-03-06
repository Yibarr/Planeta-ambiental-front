import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'
import LandingPage from './components/Landing/Landing.jsx';
import SignUpPage from './components/SignUp/SignUp.jsx';
import SignInPage from './components/SignIn/SignIn.jsx';
import PasswordForgetPage from './components/PasswordForget/PasswordForget.jsx';
import HomePage from './components/Home/Home.jsx';
import AccountPage from './components/Account/Account.jsx';
import AdminPage from './components/Admin/Admin.jsx';

import * as ROUTES from './constants/routes';

import './App.css';

function App() {
  return (
      <Router className="App">
        <div>
          <Navigation/>
          <h1 className='planeta'>Planeta Ambiental</h1>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    
  );
}

export default App;
