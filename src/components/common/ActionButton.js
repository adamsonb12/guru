import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ActionButton = ({ onPress, disabled, children }) => {
  const { buttonStyle, textStyle, containerStyle } = styles;
  if(disabled) {
    return (
      <View style={containerStyle}>
        <TouchableOpacity style={styles.disabledButtonStyle} onPress={onPress} disabled={disabled}>
          <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  else {
    return (
      <View style={containerStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress} disabled={disabled}>
          <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = {
  disabledButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#6c757d',
    borderRadius: 3,
    // borderWidth: 1,
    // borderColor: 'rgba(30,53,71,.8)',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
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
  },
  containerStyle: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { ActionButton };
