import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import 'react-native-gesture-handler';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
//import navigators
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { ThemeContext } from './ThemeContext';
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
import Governo from '../screens/Governo';
import DetailsScreen from '../screens/DetailsScreen';
import Loading from "../screens/Loading";
import Welcome from "../screens/Welcome";
import Contact from "../screens/Contact";
import { colors } from '../styles';
//para novos uruários serem redirecionados para tela welcome
const CHECK_IS_NEW = 'WelcomeFirst';

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
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Tab2"
      component={Transparencia}
      options={{
        tabBarLabel: 'Transparência',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="eye" color={color} size={26} />
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
      component={Governo}
      options={{
        tabBarLabel: 'Idéias',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="lightbulb-on" color={color} size={26} />
        ),
      }}
    />

    <AppTabs.Screen
      name="Tab5"
      component={Contact}
      options={{
        tabBarLabel: 'Contato',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="contacts" color={color} size={26} />
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

  const checkUserSignedIn = async () =>{

    try {
       let value = await AsyncStorage.getItem(CHECK_IS_NEW);
       if (value != null){
          // do something 
       }
       else {
         // Retrieves from storage as boolean
        const result = JSON.parse(value) // boolean false
        //console.log('STORAGE KEY VALUE' + result)
        result ? setisNew(false) : setisNew(false);

      }
    } catch (error) {
      console.log(error);
    }
}
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

  }

  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts();
      checkUserSignedIn();
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

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#fff',
      text: '#000',
      card: '#fff'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#222',
      text: '#fff',
      card: '#000'
    }
  }

  const themeContext = React.useMemo(() => ({

    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

 const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <ThemeContext.Provider value={themeContext}>
    <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <RootStackScreen />
        </NavigationContainer>
    </PaperProvider>
    </ThemeContext.Provider >
  );
};

export type StackParamList = {
  Home: undefined;
  Details: undefined;
  Welcome: undefined;
  Tabs: undefined;
};