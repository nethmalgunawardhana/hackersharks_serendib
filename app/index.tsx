import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
<<<<<<< HEAD

import MainStack from "./Navigation";
=======
import { NavigationContainer } from '@react-navigation/native'; 
import MainStack from "./Navigation";

>>>>>>> ad09145f5b28c73e62771eb75bff399cbcbcdd8b

export default function Index() {
  return (
    <SafeAreaProvider>
<<<<<<< HEAD
      <View style={{ flex: 1 }}>
      <MainStack />

      </View>
      
=======
      
        <View style={{ flex: 1 }}>
          <MainStack />
        </View>
    
>>>>>>> ad09145f5b28c73e62771eb75bff399cbcbcdd8b
    </SafeAreaProvider>
  );
}