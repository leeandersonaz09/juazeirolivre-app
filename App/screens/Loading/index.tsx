import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Lottie from 'lottie-react-native';
import dataloading from '../../loaders/24512-moving-mobile.json';
import * as firebase from 'firebase';
import Firebase from '../../config/firebase';
import {colors} from '../../styles';

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
      />
      <Lottie source={dataloading} style={{ width: 250, height: 250 }} autoPlay loop />
      <Text style={{color: colors.primary, fontFamily:"SFProDisplay_bold", fontWeight:'bold', fontSize:12, marginTop:40}}>Aguarde enquanto arrumamos tudo para você!</Text>
    </View>

  );


}

export default Loading;