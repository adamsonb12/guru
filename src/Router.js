import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import RoomSelection from './components/schedulingComponents/RoomSelection';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        
        <Scene key="loginProcess">
          <Scene key="onboarding" component={Onboarding} hideNavBar></Scene>
          <Scene key="signup" component={SignUpForm} title="GURU"></Scene>
          <Scene key="login" component={LoginForm} title="Login"></Scene>
        </Scene>

        <Scene key="scheduling" initial>
          <Scene key="home" component={Home} title="Home" hideNavBar/>
          <Scene key="roomSelection" component={RoomSelection} title="Room Selection"/>
        </Scene>

      </Scene>
    </Router>
  )
};

export default RouterComponent;
