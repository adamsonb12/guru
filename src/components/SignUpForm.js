import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser, lastNameChanged, firstNameChanged, signUpUser, passwordConfirmChanged } from '../actions';
import { FullContainer, CardSection, Input, Spinner, ActionButton, ImageFullScreenView, ErrorMessage } from './common';

const remote = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1506&q=80';

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
        <ActionButton disabled={this.state.disabled} onPress={this.onSignUpPress.bind(this)}>Submit</ActionButton>
    );
  }

  render() {
    return (
      <FullContainer>

        <ImageFullScreenView>
          <Image
            style={styles.ImageBackgroundStyle}
            source={{ uri: remote }}
          />
        </ImageFullScreenView>

        <View style={styles.SpacingStyle}>

          <View style={styles.IntroContainerStyle}>
            <Text style={styles.IntroContentStyle}>Sign Up for GURU</Text>
          </View>

          <Input
            placeholder="First Name"
            onChangeText={this.onFirstNameChange.bind(this)}
            value={this.props.firstName}
          />

          <Input
            placeholder="Last Name"
            onChangeText={this.onLastNameChange.bind(this)}
            value={this.props.lastName}
          />

          <Input 
            placeholder="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

          <Input 
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />

          <Input 
            secureTextEntry
            placeholder="Password Confirm"
            onChangeText={this.onPasswordConfirmChange.bind(this)}
            value={this.props.passwordConfirm}
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