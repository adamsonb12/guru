import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const InformationButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
    marginLeft: 110,
    marginRight: 110,
    paddingTop: 4,
    paddingBottom: 4
  },
  textStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'rgb(151, 151, 151)',
    fontFamily: 'Helvetica Neue',
    fontSize: 14
  },
  containerStyle: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { InformationButton };