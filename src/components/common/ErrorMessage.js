import React from 'react';
import { Text, View } from 'react-native';

const ErrorMessage = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.errorBoxStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </View>
    </View>
  );
};

const styles = {
  errorBoxStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f2dede',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ebccd1',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#a94442',
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    fontWeight: '400',
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

export { ErrorMessage };