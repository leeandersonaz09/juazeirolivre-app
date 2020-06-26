import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

function lottieLoading({data, text, color, tcolor}) {

    return (

        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <Lottie source={data} style={{ width: 350, height: 350 }} autoPlay loop />
            <Text style={{ textAlign: 'center', color: '#ff5b77', fontSize: 12 }}>Aguarde, estamos carregando as informações para você!</Text>
        </View>

    );

}

export default lottieLoading;