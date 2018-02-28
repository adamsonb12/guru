import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

function renderTaskNames(tasks) {
  let alist = [];
  tasks.forEach(t => {
    if(alist.length === tasks.length - 1) {
      alist.push(t.taskDisplayName);
    }
    else {
      alist.push(t.taskDisplayName + '; ');
    }
  });
  return (alist);
}

const RoomInfoItem = ({ item }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.roomNameContainerStyle}>
        <Text style={styles.roomNameStyle}>{item.roomDisplayName}:</Text>
      </View>
      <View style={styles.tasksContainerStyle}>
        <Text style={styles.roomTasksStyle}>{renderTaskNames(item.roomTasks)}</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingBottom: 12
  },
  roomNameContainerStyle: {
    width: '40%'
  },
  roomNameStyle: {
    color: 'rgb(63,65,66)',
    paddingLeft: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 15
  },
  tasksContainerStyle: {
    width: '60%',
    paddingRight: 10
  },
  roomTasksStyle: {
    fontSize: 15,
    fontWeight: '300',
    fontFamily: 'Helvetica Neue',
    color: 'rgb(63,65,66)',
  }
};

export { RoomInfoItem };
