import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class NavBar extends Component {

  goHome() {
    Actions.home();
  }

  render() {

    return (
      <View style={styles.navBarStyle}>
        <Icon
          name='home'
          type='font-awesome'
          color='rgb(30,53,71)'
          size={33}
          onPress={this.goHome.bind(this)}
        />
        <Icon
          name='calendar-o'
          type='font-awesome'
          color='rgb(30,53,71)'
          size={33}
        />
        <Icon
          name='account-outline'
          type='material-community'
          color='rgb(30,53,71)'
          size={33}
        />
      </View>
    );
  }
}

const styles = {
  navBarStyle: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 45,
    paddingRight: 45
  }
}

export { NavBar };