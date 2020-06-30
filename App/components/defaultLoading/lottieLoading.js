import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

function lottieLoading({data, text, color, tcolor}) {

    return (

        <View style={{ flex: 1, alignItems: 'center' }}>
            <Lottie source={data} style={{ width: 350, height: 350 }} autoPlay loop />
        </View>

    );

}

export default lottieLoading;