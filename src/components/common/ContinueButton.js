import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class ContinueButton extends Component {

  renderButton() {
    if(this.props.disabled === true) {
      return(
        <Icon
          raised
          name='arrow-right'
          type='feather'
          color='#bdbdbd'
          reverseColor='black'
          reverse={true}
          containterStyle={styles.disabledContainerStyle}
          size={26}
        />
      );
    }
    else {
      return (
        <Icon
          raised
          name='arrow-right'
          type='feather'
          color='rgb(30,53,71)'
          containterStyle={styles.activeContainerStyle}
          size={26}
          onPress={this.props.onPress}
          onLongPress={this.props.onPress}
          underlayColor='rgb(30,53,71)'
        />
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = {
  activeContainerStyle: {

  },
  disabledContainerStyle: {
    // color: 'grey'
  }
};

export { ContinueButton };
