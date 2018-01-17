import React from 'react';
import { View } from 'react-native';

const ImageFullScreenView = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
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
    }
};

export {ImageFullScreenView};
