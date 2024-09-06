import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VisaProcessEligible from './(tabs)/Visaprocess_Eligible';
import VisaProcessUpload from './(tabs)/Visaprocess_Upload';
import PassportDetails from './(tabs)/Visaprocess_Passport';
import ContactDetails from './(tabs)/Visaprocess_Contactform';
import AdditionalDetails from './(tabs)/Visaprocess_Additional';
import ApplicationSummary from './(tabs)/Visaprocess_Summary';
import MenuBar from './(tabs)/MenuBar';


const Stack = createStackNavigator();        

const NewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="Eligibility" component={VisaProcessEligible} />
      <Stack.Screen name="UploadFile" component={VisaProcessUpload} />
      <Stack.Screen name="Passport" component={PassportDetails} />
      <Stack.Screen name="Contact" component={ContactDetails} />
      <Stack.Screen name="Additional" component={AdditionalDetails} />
      <Stack.Screen name="Summary" component={ApplicationSummary} />
      <Stack.Screen name="Main" component={MenuBar} />
    </Stack.Navigator>
  );
};

export default NewStack;