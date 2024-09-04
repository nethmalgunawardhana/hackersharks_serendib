import React from "react";
import { Text, View } from "react-native";

import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuBar from "./(tabs)/MenuBar"; // Update the import path if necessary

export default function Index() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>

      <MenuBar />
      </View>
    </SafeAreaProvider>
  );
}