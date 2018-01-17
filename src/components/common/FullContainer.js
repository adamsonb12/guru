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
        marginTop: 23
    }
};

export {FullContainer};