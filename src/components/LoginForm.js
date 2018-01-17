import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';
import { FullContainer, CardSection, Input } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email } = auth;
  return { email };
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
