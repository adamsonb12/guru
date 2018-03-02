import React, { Component } from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { FullContainer, ImageFullScreenView, OrderTotal, ContinueButton } from '../common';
import RoomItem from './RoomItem';

const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class RoomSelection extends Component {

  continue() {
    Actions.appointment();
  }

  _renderItem = ({item}) => (
    <RoomItem
      room={item}
    />
  );

  renderContinueButton() {
    if(this.props.selectedRooms.length > 0) {
      return (
        <ContinueButton disabled={false} onPress={this.continue.bind(this)} />
      );
    }
    else {
      return (
        <ContinueButton disabled={true} />
      );
    }
  }

  render() {
    return (
      <FullContainer>

        <ImageFullScreenView source={remote} />

        <View style={styles.headerContainerStyle}>
          <Text style={styles.headingOneStyle}>Tap the rooms you want cleaned</Text>
          <Text style={styles.headingTwoStyle}>Edit details for specific requests</Text>
        </View>

        <View style={styles.listContainerStyle}>
          <SectionList
            keyExtractor={ (item, index) => index }
            // renderSectionHeader={({section}) => <Header title={section.title} />}
            sections={[ // heterogeneous rendering between sections
              {data: this.props.selectedRooms, renderItem: this._renderItem, title: 'Selected Rooms' },
              {data: this.props.dRooms, renderItem: this._renderItem, title: 'Tap the Rooms you want cleaned' },
            ]}
          />

        </View>

        <View style={styles.buttonContainer} >
          {this.renderContinueButton()}
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
    flexDirection: 'column',
    paddingBottom: 73
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 75,
    right: 17
  }
}

const mapStateToProps = ({ appointment, defaultRooms }) => {
  const { cleaningAppointment, price, allRooms, selectedRooms } = appointment;
  return { cleaningAppointment, price, allRooms, selectedRooms, dRooms: defaultRooms.rooms };
};

export default connect(mapStateToProps)(RoomSelection);