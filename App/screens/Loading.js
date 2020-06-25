import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Lottie from 'lottie-react-native';
import dataloading from '../loaders/preloader.json';
import * as firebase from 'firebase';
import Firebase from '../config/firebase';

function Loading({ navigation }) {
  
  if (!firebase.apps.length) {
    firebase.initializeApp(Firebase);
  }
  
  return (

    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <StatusBar
        hidden={true}
        translucent={false}
        animated={true} 
        backgroundColor='#3490dc'
      />
      <Lottie source={dataloading} style={{ width: 250, height: 250 }} autoPlay loop />
    </View>

  );


}

export default Loading;