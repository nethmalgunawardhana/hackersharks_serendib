import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import VisaProcessEligible from './(tabs)/Visaprocess_Eligible';
import VisaProcessUpload from './(tabs)/Visaprocess_Upload';
import PassportDetails from './(tabs)/Visaprocess_Passport';
import ContactDetails from './(tabs)/Visaprocess_Contactform';
import AdditionalDetails from './(tabs)/Visaprocess_Additional';
import ApplicationSummary from './(tabs)/Visaprocess_Summary';
import MenuBar from './(tabs)/MenuBar';


const Stack = createStackNavigator();        
=======
import RegistrationScreen from './signin';
import SplashScreen from './splash';
import LoginScreen from './Login';
import MenuBar from './(tabs)/MenuBar';
import ForgotPasswordScreen from './FogotPassword';
import PasswordResetScreen from './Passwordreset';
import OTPEnterScreen from './OTPenter';
import EmailInputScreen from './Emailinput';


const Stack = createStackNavigator();
>>>>>>> ad09145f5b28c73e62771eb75bff399cbcbcdd8b

const NewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
    
      <Stack.Screen name="Eligibility" component={VisaProcessEligible} />
      <Stack.Screen name="UploadFile" component={VisaProcessUpload} />
      <Stack.Screen name="Passport" component={PassportDetails} />
      <Stack.Screen name="Contact" component={ContactDetails} />
      <Stack.Screen name="Additional" component={AdditionalDetails} />
      <Stack.Screen name="Summary" component={ApplicationSummary} />
=======
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Emailinput" component={EmailInputScreen} />
      <Stack.Screen name="OTPenter" component={OTPEnterScreen} />
      <Stack.Screen name="Passwordreset" component={PasswordResetScreen} />
      <Stack.Screen name="Fogotpassword" component={ForgotPasswordScreen} />
>>>>>>> ad09145f5b28c73e62771eb75bff399cbcbcdd8b
      <Stack.Screen name="Main" component={MenuBar} />
    </Stack.Navigator>
  );
};

export default NewStack;