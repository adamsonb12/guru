import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser, lastNameChanged, firstNameChanged, signUpUser, passwordConfirmChanged } from '../actions';
import { FullContainer, CardSection, CustomInput, Spinner, ActionButton, ImageFullScreenView, ErrorMessage } from './common';

const remote = 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-0.3.5&s=f56a8fa0b3e9cc99ad651f4c1590f25f&auto=format&fit=crop&w=1390&q=80';

class SignUpForm  extends Component {

  state = {
    disabled: true,
    passwordsMatch: true
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
    this.checkFields();
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
    this.checkFields();
  }

  onPasswordConfirmChange(text) {
    this.props.passwordConfirmChanged(text);
    this.checkFields();
  }

  checkFields() {
    if(this.props.password === this.props.passwordConfirm) {
      this.setState({ disabled: false });
    }
    else {
      this.setState({ disabled: true });
    }
  }

  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }

  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }

  onSignUpPress() {
    const { email, password} = this.props;
    this.props.signUpUser({ email, password });
  }

  renderError() {
    if(this.props.error) {
      return (
        <ErrorMessage>
          {this.props.errorMessage}
        </ErrorMessage>
      );
    }
  }

  renderSubmitButton() {
    if (this.props.loading) {
      return (
        <Spinner size="large" />
      );
    }
    return (
        <ActionButton onPress={this.onSignUpPress.bind(this)}>Submit</ActionButton>
    );
  }

  render() {
    return (
      <FullContainer>

        <ImageFullScreenView source={remote} />

        <View style={styles.SpacingStyle}>

          <View style={styles.IntroContainerStyle}>
            <Text style={styles.IntroContentStyle}>Sign Up for GURU</Text>
          </View>

          <CustomInput
            placeholder="First Name"
            onChangeText={this.onFirstNameChange.bind(this)}
            value={this.props.firstName}
            icon='ios-person'
            iconType='ionicon'
          />

          <CustomInput 
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            icon='email'
            iconType='material-community'
          />

          <CustomInput 
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            icon='lock'
            iconType='font-awesome'
          />

          <CustomInput 
            secureTextEntry
            placeholder="Password Confirm"
            onChangeText={this.onPasswordConfirmChange.bind(this)}
            value={this.props.passwordConfirm}
            icon='lock'
            iconType='font-awesome'
          />

        {this.renderError()}

        {this.renderSubmitButton()}

        </View>

      </FullContainer>
    );
  }
}

const styles = {
  SpacingStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10
  },
  ImageBackgroundStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
  IntroContainerStyle: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'rgb(72,69,69)',
    marginBottom: 5
  },
  IntroContentStyle: {
    fontSize: 32,
    color: 'rgb(72,69,69)',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingBottom: 2
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, firstName, lastName, passwordConfirm, errorMessage } = auth;
  return { email, password, firstName, lastName, passwordConfirm, errorMessage };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, passwordConfirmChanged, lastNameChanged, firstNameChanged, signUpUser })(SignUpForm);