import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const StaticListItem = ({ item }) => {
  return (
    <View style={styles.containerStyle}>
      <Icon
        name={item.icon}
        type={item.iconType}
        color="rgba(63,65,66,1)"
        size={26}
      />
      <Text style={styles.textStyle}>{item.title}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#A9A9A9',
    display: 'flex',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12
  },
  textStyle: {
    color: 'rgb(63,65,66)',
    paddingLeft: 15,
    fontFamily: 'Helvetica Neue',
    fontWeight: '500',
    fontSize: 15
  }
};

export { StaticListItem };
