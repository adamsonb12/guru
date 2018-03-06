import React, { Component } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { logout } from '../../actions';
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
    Actions.pop();
  }

  goToAppointments() {
    Actions.appointments();
  }

  logout() {
    this.closeModal();
    this.props.logout();
    Actions.onboarding();
  }

  renderInnerContainer() {
    if (!this.props.user) {
      return <View />;
    } else {
      return (
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Avatar
              large
              rounded
              source={{
                uri:
                  'https://vafloc02.s3.amazonaws.com/isyn/images/f057/img-2009057-f.jpg'
              }}
              activeOpacity={0.7}
            />
            <View style={styles.infoSection}>
              {/* <Text style={styles.infoText}>Email: </Text> */}
              <Text style={styles.infoText}>{this.props.user.email}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <ActionButton onPress={() => this.logout()}>Log Out</ActionButton>
          </View>
        </View>
      );
    }
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
                iconStyle={styles.x}
                name="x"
                type="foundation"
                color="grey"
                size={35}
                onPress={() => this.closeModal()}
              />
              <Text style={styles.profile}>Profile</Text>
              <Icon name="x" type="foundation" color="white" size={35} />
            </View>
            {this.renderInnerContainer()}
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
    flexDirection: 'column'
  },
  infoSection: {
    flexDirection: 'row',
    paddingTop: 15
  },
  x: {
    paddingLeft: 15
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  profile: {
    color: 'rgb(77,99,115)',
    fontFamily: 'Helvetica Neue',
    fontSize: 30,
    fontWeight: '700',
    paddingRight: 15
  },
  infoText: {
    color: 'rgb(77,99,115)',
    fontFamily: 'Helvetica Neue',
    fontSize: 22,
    fontWeight: '700'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
};

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return { user };
};

export default connect(mapStateToProps, { logout })(NavBar);
