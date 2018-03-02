import React, { Component } from 'react';
import { View, Text, DatePickerIOS, Modal, Button } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  FullContainer,
  ImageFullScreenView,
  OrderTotal,
  ActionButton,
  ContinueButton,
  CustomInput
} from '../common';
import {
  addressChanged,
  phoneChanged,
  contactNameChanged,
  dateChanged
} from '../../actions';

const remote =
  'https://images.unsplash.com/photo-1455792244736-3ed96c3d7f7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17365d8de85449ffdfc69679b561a9d1&auto=format&fit=crop&w=375&q=80';

class AppointmentInfo extends Component {
  continue() {
    Actions.confirmation();
  }

  renderContinueButton() {
    if (
      this.props.address.length > 0 &&
      this.props.phone.length > 0 &&
      this.props.name.length > 0 &&
      this.props.addressValid &&
      this.props.phoneValid
    ) {
      return (
        <ContinueButton disabled={false} onPress={this.continue.bind(this)} />
      );
    } else {
      return <ContinueButton disabled={true} />;
    }
  }

  setAddress(text) {
    this.props.addressChanged(text);
  }

  setDate(newDate) {
    this.props.dateChanged(newDate);
  }

  setName(text) {
    this.props.contactNameChanged(text);
  }

  setPhone(text) {
    this.props.phoneChanged(text);
  }

  render() {
    return (
      <FullContainer>
        <ImageFullScreenView source={remote} />

        <View style={styles.screenContainerStyle}>
          <View style={styles.introStyle}>
            <Text style={styles.introTextStyle}>Appointment Information</Text>

            <View style={styles.innerContainer}>
            <CustomInput
              placeholder="Contact Name"
              onChangeText={this.setName.bind(this)}
              value={this.props.contactName}
              icon="ios-person"
              iconType="ionicon"
            />

            <CustomInput
              placeholder="Address"
              onChangeText={this.setAddress.bind(this)}
              value={this.props.address}
              icon="location-on"
              iconType="material"
            />

            <CustomInput
              placeholder="(555) 555-5555"
              onChangeText={this.setPhone.bind(this)}
              value={this.props.phone}
              icon="phone"
              iconType="font-awesome"
            />
            </View>
          </View>

          <View style={styles.introStyle}>
            <Text style={styles.introTextStyle}>Schedule your appointment</Text>
          </View>

          <DatePickerIOS
            date={this.props.chosenDate}
            onDateChange={this.setDate.bind(this)}
            minimumDate={this.props.currentDate}
          />
        </View>

        <View style={styles.buttonContainer}>
          {this.renderContinueButton()}
        </View>

        <OrderTotal price={this.props.price} />
      </FullContainer>
    );
  }
}

const styles = {
  screenContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.8)',
    flex: 1,
    marginBottom: 69
  },
  introStyle: {
    paddingBottom: 3
  },
  introTextStyle: {
    fontSize: 20,
    color: 'rgb(72,69,69)',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: 15
  },
  innerContainer: {
    alignItems: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 75,
    right: 17
  }
};

const mapStateToProps = ({ appointment }) => {
  const {
    cleaningAppointment,
    price,
    selectedRooms,
    address,
    phone,
    contactName,
    addressValid,
    phoneValid,
    currentDate,
    chosenDate
  } = appointment;
  return {
    cleaningAppointment,
    price,
    selectedRooms,
    address,
    phone,
    contactName,
    addressValid,
    phoneValid,
    currentDate,
    chosenDate
  };
};

export default connect(mapStateToProps, {
  addressChanged,
  phoneChanged,
  contactNameChanged,
  dateChanged
})(AppointmentInfo);
