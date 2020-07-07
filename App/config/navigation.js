import React from "react";
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
//instancing navigators
const AppTabs = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();
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
      name="ProductDetails"
      component={DetailsScreen}
    />
    
  </HomeStack.Navigator>
);

//Tab Navigator

const AppTabsScreen = () => (

  <AppTabs.Navigator 
  initialRouteName="home"
  activeColor="#ffcc00"
  inactiveColor="#fff"
  barStyle={{ backgroundColor: '#3b49b6' }}>

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

//Root Navigator
const RootStackScreen = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);
  
  async function componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
  }

  React.useEffect(() => {

    const promisse = componentDidMount();

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);

    return promisse;

  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: true 
      }}
    >
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
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