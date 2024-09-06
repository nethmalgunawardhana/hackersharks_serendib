import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './signin';
import SplashScreen from './splash';
import LoginScreen from './Login';
import MenuBar from './(tabs)/MenuBar';
import ForgotPasswordScreen from './FogotPassword';
import PasswordResetScreen from './Passwordreset';
import OTPEnterScreen from './OTPenter';
import EmailInputScreen from './Emailinput';


const Stack = createStackNavigator();

const NewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Emailinput" component={EmailInputScreen} />
      <Stack.Screen name="OTPenter" component={OTPEnterScreen} />
      <Stack.Screen name="Passwordreset" component={PasswordResetScreen} />
      <Stack.Screen name="Fogotpassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Main" component={MenuBar} />
    </Stack.Navigator>
  );
};

export default NewStack;