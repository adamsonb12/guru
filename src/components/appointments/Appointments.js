import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, Avatar, Icon } from 'react-native-elements';

import { FullContainer, ImageFullScreenView, InformationButton, ActionButton, NavBar, StaticListItem, RoomInfoItem } from '../common';

const remote = 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=361&q=80';

class Appointments extends Component {

  state = {
    upcoming: true,
    completed: false,
    upcomingAppointments: [],
    completedAppointments: [],
    monthNames: [
      "Jan", "Feb", "Mar",
      "Apr", "May", "June", "July",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }

  componentWillUnmount() {
    this.setState({ upcomingAppointments: [], completedAppointments: [] });
  }

  componentWillMount() {
    // sort props into future and past appointments
    this.setState({ upcomingAppointments: [], completedAppointments: [] });
    let alist = this.props.appointments;
    let slist = [];
    let now = Date.now();
    alist.forEach((item) => {
      // Make all the dates the same format (milliseconds)
      if(typeof(item.cleaningAppointmentDate) != 'number') {
        item.cleaningAppointmentDate = Date.parse(item.cleaningAppointmentDate);
      }
      item.cleaningAppointmentDate = new Date(item.cleaningAppointmentDate);
      if(item.cleaningAppointmentDate > now) {
        slist = this.state.upcomingAppointments;
        slist.push(item);
        if(slist.length > 1) {
          slist.sort(function (a, b) {
            return a.cleaningAppointmentDate - b.cleaningAppointmentDate;
          });
        }
        this.setState({ upcomingAppointments: slist });
      }
      else {
        slist = this.state.completedAppointments;
        slist.push(item);
        if(slist.length > 1) {
          slist.sort(function (a, b) {
            return a.cleaningAppointmentDate - b.cleaningAppointmentDate;
          });
        }
        this.setState({ completedAppointments: slist });
      }
    });
  }

  changeList() {
    this.setState({ upcoming: !this.state.upcoming, completed: !this.state.completed });
  }

  renderCompleted() {
    if(this.state.completed) {
      return (
        <TouchableOpacity style={styles.activeStyle} onPress={this.changeList.bind(this)}>
          <Text style={styles.textActive}>completed</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.disabledStyle} onPress={this.changeList.bind(this)}>
        <Text style={styles.textDisabled}>completed</Text>
      </TouchableOpacity>
    );
  }

  _renderInfoItem = ({ item }) => <StaticListItem item={item} />;

  _renderRoomItem = ({ item }) => <RoomInfoItem item={item}  />;

  _renderItem = ({item}) => (
    <Card>
      <View style={styles.cardHeaderContainerStyle}>
        <Avatar
          rounded
          source={{uri: item.guruAvatarLink}}
          activeOpacity={0.7}
        />
        <View style={styles.cardHeaderDescriptionContainerStyle}>
          <Text style={styles.cardTitleStyle} numberOfLines={1}>{item.guruName}</Text>
          <View style={styles.ratingContainerStyle}>
            <Text style={styles.ratingStyle}>{item.guruAverageRating}</Text>
            <Icon
              name='star-circle'
              type='material-community'
              color='#517fa4'
            />
          </View>
        </View>
      </View>
      <View style={styles.cardContentContainerStyle}>
        <FlatList
          data={[
            {
              title: (
                this.state.dayNames[item.cleaningAppointmentDate.getDay()] + ', ' + 
                this.state.monthNames[item.cleaningAppointmentDate.getMonth()] + ' ' +
                item.cleaningAppointmentDate.getDate().toString() + ', ' +
                item.cleaningAppointmentDate.getFullYear().toString()
              ),
              icon: 'calendar-o',
              iconType: 'font-awesome',
              key: 'date'
            },
            {
              title: (
                item.cleaningAppointmentDate.getHours()%12 + ':' +
                item.cleaningAppointmentDate.getMinutes() + 
                (item.cleaningAppointmentDate.getHours() <= 12 ? ' AM' : ' PM')               
              ),
              icon: 'ios-time',
              iconType: 'ionicon',
              key: 'time'
            },
            {
              title: item.contactName,
              icon: 'ios-contact',
              iconType: 'ionicon',
              key: 'contact'
            },
            {
              title: item.contactPhone,
              icon: 'phone',
              iconType: 'material',
              key: 'phone'
            },
            {
              title: item.address,
              icon: 'location-on',
              iconType: 'material',
              key: 'address'
            }
          ]}
          renderItem={this._renderInfoItem}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.roomInfoContainerStyle}>
        <FlatList
          scrollEnabled={false}
          data={item.rooms}
          renderItem={this._renderRoomItem}
          keyExtractor={ (item, index) => index }
        />
      </View>
    </Card>
  );

  renderList() {
    let alist = this.state.upcoming ? this.state.upcomingAppointments : this.state.completedAppointments;
    return(
        <FlatList
          data={alist}
          renderItem={this._renderItem}
          keyExtractor={item => item.guruName}
        />
    );
  }

  renderUpcoming() {
    if(this.state.upcoming) {
      return (
        <TouchableOpacity style={styles.activeStyle} onPress={this.changeList.bind(this)}>
          <Text style={styles.textActive}>upcoming</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.disabledStyle} onPress={this.changeList.bind(this)}>
        <Text style={styles.textDisabled}>upcoming</Text>
      </TouchableOpacity>
    );
  }

  bookNow() {
    Actions.roomSelection();
  }

  render() {
    return (
      <FullContainer spacing='space-between'>
        
        <ImageFullScreenView source={remote} />

          <ScrollView>

            <View style={styles.IntroStyle}>
                <Text style={styles.IntroDescriptionStyle}>Appointments</Text>
            </View>
            
            <View style={styles.appointmentListContainerStyle}>
              {this.renderList()}
            </View>

          </ScrollView>

          <View style={styles.optionsStyle}>
            {this.renderUpcoming()}
            {this.renderCompleted()}
          </View>

          <NavBar />

      </FullContainer>
    );
  }
}

const styles = {
  IntroDescriptionStyle: {
    fontSize: 18,
    color: 'rgb(72,69,69)',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingTop: 50,
    paddingBottom: 15
  },
  IntroStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  },
  optionsStyle: {
    display: 'flex',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 45,
    justifyContent: 'flex-end',
  },
  appointmentListContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10
  },
  cardContentContainerStyle: {
    borderTopWidth: 1,
    borderColor: '#A9A9A9',
  },
  ratingStyle: {
    paddingRight: 5,
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontWeight: '100',
    color: 'rgb(63,65,66)'
  },
  cardHeaderDescriptionContainerStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
    overflow: 'hidden'
  },
  ratingContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitleStyle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '100',
    color: 'rgb(63,65,66)'
  },
  cardHeaderContainerStyle: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 9
  },
  activeStyle: {
    backgroundColor: 'rgba(77,99,115,0.9)',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledStyle: {
    backgroundColor: 'rgba(252, 252, 252, 0.75)',
    justifyContent: 'center',
    width: '50%',
    alignItems: 'center'
  },
  textActive: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '300',
    color: '#fff'
  },
  textDisabled: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '300',
    color: '#4d6373'
  }
}

const mapStateToProps = ({ appointment }) => {
  const { appointments } = appointment;
  return { appointments };
}

export default connect(mapStateToProps)(Appointments);
