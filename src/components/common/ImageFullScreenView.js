import React from 'react';
import { View, Image } from 'react-native';

const ImageFullScreenView = ({ source, children }) => {
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.ImageBackgroundStyle}
                source={{ uri: source }}
            />
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    ImageBackgroundStyle: {
        flex: 1,
        resizeMode: 'cover'
    },
};

export { ImageFullScreenView };
