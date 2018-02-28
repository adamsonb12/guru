import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FlatList, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Overlay } from 'react-native-elements';

import {
  FullContainer,
  ImageFullScreenView,
  ActionButton,
  StaticListItem,
  RoomInfoItem
} from '../common';

import { confirmedAppointment } from '../../actions';

const remote =
  'https://images.unsplash.com/photo-1507512795116-c82643d52edc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea45c655ea28e6ff8869146926159a64&auto=format&fit=crop&w=387&q=80';

class Confirmation extends Component {

  state = {
    overlayVisible: true
  }

  _confirmAppointment() {
    Alert.alert(
      'Attention',
      'You won\'t be charged until the service has been completed.',
      [
        {text: 'Ok', onPress: () => this.processing()}
      ],
      { cancelable: false }
    )
  }

  // Needs work => Make a loading overlay while processing from alert
  processing() {
    // this.overlayVisible = !this.overlayVisible;
    // this.overlayVisible = !this.overlayVisible;
    Actions.home();
    this.props.confirmedAppointment(this.props.selectedRooms);
  }

  _keyExtractor = (item, index) => item.id;

  state = {
    chosenDate: new Date(),
    currentDate: new Date(),
    address: '',
    name: '',
    phone: '',
    phoneErrorMessage: ''
  };

  setAddress(text) {
    this.setState({ address: text });
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setName(text) {
    this.setState({ name: text });
  }

  setPhone(text) {
    this.setState({ phone: text });
    if (phoneRegex.test(text)) {
      this.setState({ phoneErrorMessage: '' });
    } else {
      this.setState({ phoneErrorMessage: 'Invalid Phone Number' });
    }
  }

  _renderItem = ({ item }) => <StaticListItem item={item} />;

  _renderRoomItem = ({ item }) => <RoomInfoItem item={item}  />;

  render() {
    return (
      <FullContainer>
        <ImageFullScreenView source={remote} />

        <ScrollView style={styles.screenContainerStyle}>
          <View style={styles.introStyle}>
            <Text style={styles.introTextStyle}>
              Confirm your appointment, and we'll handle the rest
            </Text>
          </View>

          <View style={styles.appointmentInfoStyle}>
            <FlatList
              data={[
                {
                  title: this.props.dateString,
                  icon: 'calendar-o',
                  iconType: 'font-awesome',
                  key: 'date'
                },
                {
                  title: this.props.timeString,
                  icon: 'ios-time',
                  iconType: 'ionicon',
                  key: 'time'
                },
                {
                  title: this.props.contactName,
                  icon: 'ios-contact',
                  iconType: 'ionicon',
                  key: 'contact'
                },
                {
                  title: this.props.phone,
                  icon: 'phone',
                  iconType: 'material',
                  key: 'phone'
                },
                {
                  title: this.props.address,
                  icon: 'location-on',
                  iconType: 'material',
                  key: 'address'
                }
              ]}
              renderItem={this._renderItem}
              scrollEnabled={false}
            />
          </View>

          <View style={styles.roomInfoContainerStyle}>
            <FlatList
              scrollEnabled={false}
              data={this.props.selectedRooms}
              renderItem={this._renderRoomItem}
              keyExtractor={ (item, index) => index }
            />
          </View>

          <ActionButton onPress={this._confirmAppointment.bind(this)} >Confirm Payment $ {(this.props.price/100).toFixed(2)}</ActionButton>

        </ScrollView>
      </FullContainer>
    );
  }
}

const styles = {
  screenContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.6)',
    flex: 1,
    paddingBottom: 5
  },
  introStyle: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 45,
    paddingRight: 45
  },
  introTextStyle: {
    fontSize: 20,
    color: 'rgb(72,69,69)',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  },
  appointmentInfoStyle: {
    borderTopWidth: 1,
    borderColor: '#A9A9A9',
  },
  roomInfoContainerStyle: {
  }
};

const mapStateToProps = ({ appointment }) => {
  const {
    cleaningAppointment,
    price,
    selectedRooms,
    chosenDate,
    address,
    phone,
    contactName,
    dateString,
    timeString
  } = appointment;
  return {
    cleaningAppointment,
    price,
    selectedRooms,
    chosenDate,
    address,
    phone,
    contactName,
    dateString,
    timeString
  };
};

export default connect(mapStateToProps, {confirmedAppointment})(Confirmation);
