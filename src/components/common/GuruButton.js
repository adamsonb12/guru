import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GuruButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(30,53,71,.8)',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgb(151, 151, 151)',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Helvetica Neue',
    fontSize: 26,
    fontWeight: '200',
    letterSpacing: 0.47999998927116394
  }
};

export { GuruButton };
