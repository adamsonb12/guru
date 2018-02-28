import React, { Component } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { ActionButton } from '../common';

class NavBar extends Component {
  state = {
    modalVisible: false
  };

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  goHome() {
    Actions.home();
  }

  goToAppointments() {
    Actions.appointments();
  }

  logout() {
    this.closeModal();
    Actions.onboarding();
  }

  render() {
    return (
      <View style={styles.navBarStyle}>
        <Icon
          name="home"
          type="font-awesome"
          color="rgb(30,53,71)"
          size={33}
          onPress={this.goHome.bind(this)}
        />
        <Icon
          name="calendar-o"
          type="font-awesome"
          color="rgb(30,53,71)"
          size={33}
          onPress={this.goToAppointments.bind(this)}
        />
        <Icon
          name="account-outline"
          type="material-community"
          color="rgb(30,53,71)"
          size={33}
          onPress={() => this.openModal()}
        />

        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalHeaderContainer}>
              <Icon
                name="x"
                type="foundation"
                color="grey"
                size={33}
                onPress={() => this.closeModal()}
              />
            </View>
            <View style={styles.innerContainer}>
              <Text style={styles.username}>UserName</Text>
              <Avatar
                large
                rounded
                source={{uri: "https://vafloc02.s3.amazonaws.com/isyn/images/f057/img-2009057-f.jpg"}}
                activeOpacity={0.7}
              />
              <ActionButton onPress={() => this.logout()}>Log Out</ActionButton>
            </View>
          </View>
        </Modal>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 15,
    paddingLeft: 15
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    color: 'rgb(77,99,115)',
    fontFamily: 'Helvetica Neue',
    fontSize: 30,
    fontWeight: '700'
  }
};

export { NavBar };
