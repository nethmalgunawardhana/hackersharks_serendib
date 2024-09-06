import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Emailinput: undefined;
  OTPenter: undefined;
  Passwordreset: undefined;
};
type OTPEnterScreenProp = StackNavigationProp<RootStackParamList, 'OTPenter'>;

const OTPEnterScreen: React.FC = () => {
  const [otp, setOtp] = useState('');

 

  const handleNotThisEmail = () => {
    // Implement your logic for changing the email
    console.log('User wants to change email');
  };
  const navigation = useNavigation<OTPEnterScreenProp>();

  return (
    <ImageBackground
    source={{ uri: 'https://example.com/your-background-image.jpg' }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.3)']}
        style={styles.container}
      >
        <Text style={styles.infoText}>
          We have sent you a 6 digit code to your email address
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            maxLength={6}
          />
        </View>
        <TouchableOpacity style={styles.notThisEmailButton} onPress={handleNotThisEmail}>
          <Text style={styles.notThisEmailText}>Not this email?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={()=> navigation.navigate("Passwordreset")}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  notThisEmailButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  notThisEmailText: {
    color: '#0000FF',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  continueText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OTPEnterScreen;