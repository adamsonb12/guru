import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class OrderTotal extends Component {

  render() {

    return (
      <View style={styles.OrderTotalStyle}>
        <Text style={styles.TextStyle}>Order Total: $ {this.props.price}</Text> 
      </View>
    );
  }
}

const styles = {
  OrderTotalStyle: {
    width: '100%',
    height: 69,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(30,53,71,.8)',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 45,
    paddingRight: 45
  },
  TextStyle: {
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    fontWeight: '500'
  }
}

export { OrderTotal };