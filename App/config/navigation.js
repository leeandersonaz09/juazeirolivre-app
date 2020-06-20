import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

const AppTabs = createBottomTabNavigator();
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

  <AppTabs.Navigator>

    <AppTabs.Screen
      name="home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Início',
        tabBarIcon: props => (
          <Ionicons name="ios-home" size={props.size} color={props.color} />
        )
      }}
    />

    <AppTabs.Screen
      name="Tab2"
      component={Tab2}
      options={{
        tabBarLabel: 'Transparência',
        tabBarIcon: props => (
          <Ionicons name="ios-eye" size={props.size} color={props.color} />
        )
      }}
    />

    <AppTabs.Screen
      name="Tab3"
      component={Raiox}
      options={{
        tabBarLabel: 'Raio-X da Cidade',
        tabBarIcon: props => (

          <Ionicons
            name="ios-pulse"
            size={props.size}
            color={props.color}
          />
        )
      }}
    />

<AppTabs.Screen
      name="Tab4"
      component={Downloads}
      options={{
        tabBarLabel: 'Downloads',
        tabBarIcon: props => (

          <Ionicons
            name="md-cloud-download"
            size={props.size}
            color={props.color}
          />
        )
      }}
    />

  </AppTabs.Navigator>
);


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

    componentDidMount();

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);
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