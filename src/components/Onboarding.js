import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { FullContainer, ActionButton, CardSection, ImageFullScreenView, BottomSection } from './common';

// const remote = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1506&q=80';
const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class Onboarding extends Component {

  onLoginPress() {
    Actions.login();
  }

  onRegisterPress() {
    Actions.signup();
  }

  render() {

    const resizeMode = 'cover';

    return (
      <FullContainer style={styles.SpacingStyle}>

        <ImageFullScreenView source={remote} />

        <View style={styles.HazeStyle}>

          <View style={styles.IntroStyle}>
            <View>
              {/* <Image style={{width: '100%'}} source={require('../../assets/images/guruLogo.png')} /> */}
              <Text style={styles.LogoStyle}>GURU</Text>
            </View>

            <View>
              <Text style={styles.DescriptionStyle}>Affordable home cleaning on demand</Text>
            </View>
          </View>

          <View style={styles.BottomStyle}>
              <ActionButton onPress={this.onRegisterPress.bind(this)}>Register with Email</ActionButton>
              <ActionButton onPress={this.onLoginPress.bind(this)}>Login</ActionButton>
          </View>
        
        </View> 

      </FullContainer>
    );
  }
}

const styles = {
  SpacingStyle: {
    justifyContent: 'space-between'
  },
  ImageBackgroundStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
  HazeStyle: {
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,.6)',
    justifyContent: 'space-between'
  },
  LogoStyle: {
    fontSize: 55,
    color: 'rgb(72,69,69)',
    fontWeight: '600',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center'
  },
  DescriptionStyle: {
    fontSize: 32,
    color: 'rgb(72,69,69)',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: 25
  },
  IntroStyle: {
    flexDirection: 'column',
    paddingTop: 50
  },
  BottomStyle: {
    paddingBottom: 35
  }
}

export default Onboarding;
