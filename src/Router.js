import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Onboarding from './components/Onboarding';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import RoomSelection from './components/schedulingComponents/RoomSelection';
import TaskChecklist from './components/schedulingComponents/TaskChecklist';
import AppointmentInfo from './components/schedulingComponents/AppointmentInfo';
import Confirmation from './components/schedulingComponents/Confirmation';
import Appointments from './components/appointments/Appointments';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        
        <Scene key="loginProcess">
          <Scene key="onboarding" component={Onboarding} hideNavBar></Scene>
          <Scene key="signup" component={SignUpForm} title="GURU"></Scene>
          <Scene key="login" component={LoginForm} title="Login"></Scene>
        </Scene>

        <Scene key="home" component={Home} title="Home" hideNavBar initial />
        <Scene key="appointments" component={Appointments} title="Appointments" hideNavBar />

        <Scene key="scheduling">
          <Scene key="homeSchedule" component={Home} title="Home" hideNavBar/>
          <Scene key="roomSelection" component={RoomSelection} title="Room Selection"/>
          <Scene key="taskSelection" component={TaskChecklist} title="Room Details" />
          <Scene key="appointment" component={AppointmentInfo} title="Guru" />
          <Scene key="confirmation" component={Confirmation} title="Confirmation" />
        </Scene>

      </Scene>
    </Router>
  )
};

export default RouterComponent;
