import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { FullContainer, ImageFullScreenView, InformationButton, ActionButton } from './common';
import NavBar from './common/NavBar';

const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class Home extends Component {

  bookNow() {
    Actions.roomSelection();
  }

  render() {
    return (
      <FullContainer spacing='space-between'>
        
        <ImageFullScreenView source={remote} />

          <View style={styles.IntroStyle}>
              <Text style={styles.IntroDescriptionStyle}>Guru contracts with local professionals to bring you affordable 
              home services, when you want it, however you want it.</Text>
              {/* <InformationButton>Learn how the app works</InformationButton> */}
          </View>

          <View>
            <Text style={styles.NotificationDescriptionStyle}>Your appointment notifications will display here.</Text>
          </View>

          <View style={styles.ButtonStyle}>
            <ActionButton onPress={this.bookNow.bind(this)}>Book Now</ActionButton>
          </View>

          <NavBar />

      </FullContainer>
    );
  }
}

const styles = {
  IntroDescriptionStyle: {
    fontSize: 18,
    color: 'rgb(72,69,69)',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: 50,
    paddingBottom: 15
  },
  NotificationDescriptionStyle: {
    fontSize: 18,
    color: 'rgb(72,69,69)',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingLeft: 30,
    paddingRight: 30
  },
  IntroStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  },
  ButtonStyle: {
    paddingBottom: 110
  }
}

export default Home;
