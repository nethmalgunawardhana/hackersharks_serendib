import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'; 
import MainStack from "./Navigation";


export default function Index() {
  return (
    <SafeAreaProvider>
      
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
    
    </SafeAreaProvider>
  );
}