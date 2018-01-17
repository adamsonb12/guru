import React from 'react';
import { View } from 'react-native';

const FullContainer = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#FBFBF9',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between' This should happen in the screne calling this component
    }
};

export {FullContainer};