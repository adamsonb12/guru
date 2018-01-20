import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { FullContainer, CardSection, Input, Spinner, ActionButton, ImageFullScreenView, ErrorMessage } from './common';

const remote = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1506&q=80';

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
