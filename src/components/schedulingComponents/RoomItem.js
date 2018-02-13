import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { ImageFillContainer } from '../common';
import { addRoom, removeRoom, selectDetails } from '../../actions';

class RoomItem extends React.PureComponent {

  _onPress = () => { // If statement here fo whether or not to add or remove
    if(this.props.room.active) {
      this.props.removeRoom(this.props.room);
    }
    else {
      this.props.addRoom(this.props.room);
    }
  };

  onDetailsPress() {
    this.props.selectDetails(this.props.room);
    Actions.taskSelection();
  }

  renderContent() {
    if (this.props.room.active) {
      return (
        <TouchableOpacity onPress={this._onPress} style={styles.imageButtonStyle}>
          <ImageFillContainer source={this.props.room.roomImage} />
          <View style={styles.textContainer}>
            <Text style={styles.imageRoomNameStyle}>{this.props.room.roomDisplayName}</Text>
            <TouchableOpacity onPress={this.onDetailsPress.bind(this)}>
              <Text style={styles.imageDetailsStyle}>details</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.buttonStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.roomNameStyle}>{this.props.room.roomDisplayName}</Text>
          <TouchableOpacity onPress={this.onDetailsPress.bind(this)}>
            {/* <Text style={styles.imageDetailsStyle}>details</Text> */}
          </TouchableOpacity>
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
  },
  detailsButtonStyle: {

  }
}

const mapStateToProps = ({ appointment }) => {
  return {};
};

export default connect(mapStateToProps, { addRoom, removeRoom, selectDetails })(RoomItem);
