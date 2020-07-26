import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import 'react-native-gesture-handler';
//import navigators
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//icons and fonts
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from "@expo/vector-icons";
import * as Font from 'expo-font';
//import de telas 
import HomeScreen from "../screens/Home";
import Transparencia from "../screens/Transparencia";
import Raiox from '../screens/Raiox';
import Downloads from '../screens/Downloads';
import DetailsScreen from '../screens/DetailsScreen';
import Loading from "../screens/Loading";
import Welcome from "../screens/Welcome";
import { colors } from '../styles';
//para novos uruários serem redirecionados para tela welcome
const MY_STORAGE_KEY = 'WelcomeFirst';
//instancing navigators
const AppTabs = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();
const WelcomeStack = createStackNavigator()
const HomeStack = createStackNavigator();

//stack navigator Home
const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
    />
    <HomeStack.Screen
      name="Details"
      component={DetailsScreen}
    />

  </HomeStack.Navigator>
);

//Tab Navigator

const AppTabsScreen = () => (

  <AppTabs.Navigator
    initialRouteName="home"
    activeColor={colors.yellow}
    inactiveColor={colors.white}
    barStyle={{ backgroundColor: colors.primary }}>

    <AppTabs.Screen
      name="Tab1"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Início',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Tab2"
      component={Transparencia}
      options={{
        tabBarLabel: 'Transparência',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="eye" color={color} size={25} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Tab3"
      component={Raiox}
      options={{
        tabBarLabel: 'Cidade',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="pulse" color={color} size={26} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Tab4"
      component={Downloads}
      options={{
        tabBarLabel: 'Downloads',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cloud-download" color={color} size={24} />
        ),
      }}
    />

  </AppTabs.Navigator>
);

const WelcomeStackScreen = () => (
  <WelcomeStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <WelcomeStack.Screen name="Welcome" component={Welcome} />
    <WelcomeStack.Screen name="Tabs" component={AppTabsScreen} />
  </WelcomeStack.Navigator>
);

//Root Navigator
const RootStackScreen = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setfontsLoaded] = useState(false);
  const [isnew, setisNew] = useState(true);


  const loadFonts = async () => {

    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      SFProDisplay_bold: require("../styles/fonts/SFProDisplay_Bold.ttf"),
      SFProDisplay_regular: require("../styles/fonts/SFProDisplay_Regular.ttf"),
      ...Ionicons.font,
    }).then(() => {
      setfontsLoaded(true);
    });
    
    // Retrieves from storage as boolean
    await AsyncStorage.getItem(MY_STORAGE_KEY, (err, value) => {
      if (err) {
        console.log(err)
      } else {
        const result = JSON.parse(value) // boolean false
        result ? setisNew(false) : setisNew(true);

      }
    })


  }

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
    }

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);

  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{
        animationEnabled: true
      }}
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : isnew ? (
        <RootStack.Screen name="WelcomeStackScreen" component={WelcomeStackScreen} />
      ) : (
            <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
          )}

    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export type StackParamList = {
  Home: undefined;
  Details: undefined;
  Welcome: undefined;
  Tabs: undefined;
};