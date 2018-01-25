import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { ImageFillContainer } from '../common';

class RoomItem extends React.PureComponent {

  state = {
    active: false
  }

  _onPress = () => {
    this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false });
  };

  renderContent() {
    if (this.state.active) {
      return (
        <TouchableOpacity onPress={this._onPress} style={styles.imageButtonStyle}>
          <ImageFillContainer source={this.props.imgSource} />
          <View style={styles.textContainer}>
            <Text style={styles.imageRoomNameStyle}>{this.props.title}</Text>
            <Text style={styles.imageDetailsStyle}>details</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.buttonStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.roomNameStyle}>{this.props.title}</Text>
          <Text style={styles.detailsStyle}>details</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.itemContainerStyle}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  itemContainerStyle: {
    paddingTop: 10
  },
  buttonStyle: {
    height: 67,
    width: 353,
    backgroundColor: 'rgba(0, 0, 0, .45)',
    borderRadius: 5,
    justifyContent: 'center'
  },
  imageButtonStyle: {
    height: 67,
    width: 353,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  roomNameStyle: {
    color: '#fff',
    paddingLeft: 15,
    fontSize: 24,
    fontFamily: 'Helvetica Neue'
  },
  imageRoomNameStyle: {
    color: '#fff',
    paddingLeft: 15,
    fontSize: 24,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700'
  },
  detailsStyle: {
    color: '#fff',
    paddingRight: 15,
    fontSize: 16,
    fontFamily: 'Helvetica Neue'
  },
  imageDetailsStyle: {
    color: '#fff',
    paddingRight: 15,
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '700'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

export default RoomItem;
