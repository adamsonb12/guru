import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        
        <Scene key="loginProcess">
          <Scene key="onboarding" component={Onboarding} hideNavBar  ></Scene>
          <Scene key="login" component={LoginForm} title="Guru" initial></Scene>
        </Scene>

      </Scene>
    </Router>
  )
};

export default RouterComponent;
