import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
import Firebase from '../config/firebase';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
import 'react-native-gesture-handler';

//import de telas 
import HomeScreen from "../screens/Home";
import Tab2 from "../screens/Transparencia";
import Tab3 from "../screens/Tab3";
import Tab4 from "../screens/Tab4";
import Raiox from '../screens/raiox';
import Downloads from '../screens/downloads';
import Loading from "../screens/Loading";
import { Tabs } from "native-base";

const AppTabs = createMaterialBottomTabNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
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
      name="home"
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
      component={Tab2}
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


const RootStackScreen = () => {
  
  const [isLoading, setIsLoading] = React.useState(true);

  
  if (!firebase.apps.length) {
    firebase.initializeApp(Firebase);
  }
  
  async function componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
  }

  React.useEffect(() => {

    componentDidMount();

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 4000);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}

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