import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        
        <Scene key="loginProcess">
          <Scene key="onboarding" component={Onboarding} hideNavBar initial ></Scene>
          <Scene key="login" component={LoginForm} title="Guru" ></Scene>
        </Scene>

        <Scene key="home" component={Home} title="Home" />

      </Scene>
    </Router>
  )
};

export default RouterComponent;
