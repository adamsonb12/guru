import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.spinnerStyle} >
                <ActivityIndicator
                    size = { size || 'large' }
                />
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner };
