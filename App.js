import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/home";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import RootDrawerNavigator from "./routes/drawer";

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [ fontLoaded, setFontLoaded ] = useState(false);
  
  let [fontsLoaded] = useFonts({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <RootDrawerNavigator />
    );
  }
}

