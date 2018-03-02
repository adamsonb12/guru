import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry, icon, iconType }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={styles.mainContainerStyle}>
      <Input
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        inputStyle={styles.inputStyle}
        leftIcon={<Icon name={icon} type={iconType} size={24} color="rgb(72,69,69)" />}
        containerStyle={{width: '100%'}}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'rgb(72,69,69)'
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainContainerStyle: {
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CustomInput };
