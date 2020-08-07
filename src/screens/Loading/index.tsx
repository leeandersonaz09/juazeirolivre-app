import React from 'react';
import { View, StatusBar, Text, ActivityIndicator } from 'react-native';
import Lottie from 'lottie-react-native';
import dataloading from '../../loaders/24512-moving-mobile.json';
import * as firebase from 'firebase';
import Firebase from '../../config/firebase';
import { colors } from '../../styles';

function Loading({ navigation }) {

  if (!firebase.apps.length) {
    firebase.initializeApp(Firebase);
  }

  return (

    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary
    }}>
      <StatusBar
        hidden={true}
        translucent={true}
        animated={true}
      />
      <Lottie
        source={dataloading}
        style={{
          width: 250,
          height: 250
        }}
        autoPlay loop
      />
    <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 12, marginVertical: 20}}>Aguarde enquanto arrumamos tudo para você!</Text>
        <ActivityIndicator size="small" color={colors.yellow} />
    </View>

  );


}

export default Loading;