import React, { Component } from 'react';
import { View, Text, FlatList, SectionList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { List, ListItem } from 'react-native-elements';

import { FullContainer, ImageFullScreenView, OrderTotal, ContinueButton, ActionButton } from '../common';
import RoomItem from './RoomItem';

const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class RoomSelection extends Component {

  continue() {
    Actions.appointment();
  }

  _renderItem = ({item, index}) => (
    <RoomItem
      room={item}
      index={index}
    />
  );

  renderHeader(title, subtitle) {
    return(
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        {this.renderSubtitle(subtitle)}
      </View>
    );
  }

  renderSubtitle(subtitle) {
    if(subtitle) {
      return (
        <Text style={styles.headingTwoStyle}>{subtitle}</Text>
      );
    }
    return;
  }

  renderActionButton() {
    if(this.props.selectedRooms.length > 0) {
      return (
        <ActionButton disabled={false} onPress={this.continue.bind(this)}>Next</ActionButton>
      );
    }
    else {
      return (
        <ActionButton disabled={true}>Add a Room to Continue</ActionButton>
      );
    }
  }

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

        {/* <View style={styles.headerContainerStyle}>
          <Text style={styles.headingTwoStyle}>Edit details for specific requests</Text>
        </View> */}

        <View style={styles.listContainerStyle}>
          <SectionList
            keyExtractor={ (item, index) => index }
            renderSectionHeader={({section}) => this.renderHeader(section.title, section.subtitle) }
            sections={[ // heterogeneous rendering between sections
              {data: this.props.dRooms, renderItem: this._renderItem, title: 'Tap the rooms you want cleaned' },
              {data: this.props.selectedRooms, renderItem: this._renderItem, title: 'Your Rooms: ' + this.props.selectedRooms.length, subtitle: 'Edit details for specific requests' }, 
            ]}
          />

          {this.renderActionButton()}

        </View>

        {/* <View style={styles.buttonContainer} >
          {this.renderContinueButton()}
        </View> */}

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
  headerContainer: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  headerText: {
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