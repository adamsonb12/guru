import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { FullContainer, Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class Onboarding extends Component {

  onLoginPress() {
    Actions.login();
  }

  render() {
    return (
      <FullContainer>
        <Text>GURU</Text>
        <Text>Affordable home services on demand</Text>

        <CardSection>
          <Button>Register with Email</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
        </CardSection>
      </FullContainer>
    );
  }
}

// const styles = {
// }

export default Onboarding;
