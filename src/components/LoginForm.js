import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FullContainer, CardSection, CustomInput, Spinner, ActionButton, ImageFullScreenView, ErrorMessage } from './common';

const remote = 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1053a3cdbabdd85102b762b3a05966ae&auto=format&fit=crop&w=751&q=80';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
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
        <ActionButton onPress={this.onLoginPress.bind(this)}>Submit</ActionButton>
    );
  }

  render() {
    return (
      <FullContainer>

        <ImageFullScreenView source={remote} />

        <View style={styles.SpacingStyle}>

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
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error, user, errorMessage } = auth;
  return { email, password, loading, error, user, errorMessage };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
