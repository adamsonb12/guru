import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles;

    return (
        <View style={styles.mainContainerStyle}>
            <View style={containerStyle}>
                <TextInput
                    placeholder={placeholder}
                    autoCorrect={false}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

const styles = {
    inputStyle: {
        backgroundColor: '#fff',
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 20,
        flex: 2,
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 10,
        shadowOffset: { height: 3, width: 1},
        shadowOpacity: 0.8,
        shadowColor: '#000'
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

export { Input };
