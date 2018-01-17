import React from 'react';
import { View } from 'react-native';

const BottomSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        paddingBottom: 50
    }
};

export {BottomSection};