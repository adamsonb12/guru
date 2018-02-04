import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { FullContainer, ImageFullScreenView, OrderTotal } from '../common';
// import { getDefaultRooms } from '../../actions';
import RoomItem from './RoomItem';

const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class RoomSelection extends Component {

  _renderItem = ({item}) => ( 
    <RoomItem 
      room={item}
    />
  );

  render() {
    return (
      <FullContainer>

        <ImageFullScreenView source={remote} />

        <View style={styles.headerContainerStyle}>
          <Text style={styles.headingOneStyle}>Tap the rooms you want cleaned</Text>
          <Text style={styles.headingTwoStyle}>Edit details for specific requests</Text>
        </View>

        <View style={styles.listContainerStyle}>
          <FlatList
            data={this.props.baseRooms}
            renderItem={this._renderItem}
            keyExtractor={item => item.roomName}
          />
        </View>

        <OrderTotal price={this.props.price} />

      </FullContainer>
    );
  }
}

const styles = {
  headerContainerStyle: {
    paddingTop: 15,
    paddingBottom: 10
  },
  headingOneStyle: {
    fontSize: 20,
    color: 'rgb(72,69,69)',
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
  },
  headingTwoStyle: {
    fontSize: 14,
    color: 'rgb(72,69,69)',
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: 8
  },
  listContainerStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  }
}

const mapStateToProps = ({ rooms }) => {
  const { baseRooms, selectedRooms, price } = rooms;
  return { baseRooms, selectedRooms, price};
};

export default connect(mapStateToProps)(RoomSelection);