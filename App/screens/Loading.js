import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';
import dataloading from '../loaders/24512-moving-mobile.json';

function Loading({ navigation }) {
  
  return (

    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <StatusBar
        hidden={true}
        translucent={false}
        animated={true} 
        backgroundColor='#3490dc'
      />
      <Lottie source={dataloading} style={{ width: 150, height: 150 }} autoPlay loop />
    </View>

  );


}

export default Loading;