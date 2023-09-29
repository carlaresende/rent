import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './src/router';
export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    
  });
  
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
   <>
   <View style={{flex:1}} onLayout={onLayoutRootView}>

     <StatusBar style="light" backgroundColor="#000" translucent={false}/> 
  <Routes/>   
   </View>
   
  
   </> 
  );
}

