import React from 'react';
import { View } from 'react-native';

const FullContainer = ({ spacing, children }) => {
    return (
        <View style={{
            backgroundColor: '#FBFBF9',
            flex: 1,
            flexDirection: 'column',
            justifyContent: spacing
        }}>
            {children}
        </View>
    );
};

export {FullContainer};