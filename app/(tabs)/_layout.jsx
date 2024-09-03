import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuBar from './MenuBar';

export default function Layout() {
  return (
    <NavigationContainer>
      <MenuBar />
    </NavigationContainer>
  );
}