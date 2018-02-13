import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';

const Checkbox = ({ onPress, task, children }) => {
  return (
    <CheckBox
      right
      title={task.taskDisplayName}
      checked={task.active}
      iconRight
      containerStyle={styles.containerStyle}
      textStyle={styles.textStyle}
      iconType='material-community'
      checkedIcon='checkbox-marked-circle'
      uncheckedIcon='checkbox-blank-circle-outline'
      checkedColor='white'
      size={32}
      onPress={onPress}
    />
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 24,
    color: 'rgb(72,69,69)',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  }
};

export { Checkbox };
