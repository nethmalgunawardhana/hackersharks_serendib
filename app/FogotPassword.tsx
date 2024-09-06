import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList ={
    Login:undefined;
    Fogotpassword:undefined;
    Emailinput:undefined;
};
type ForgotPasswordScreenProp = StackNavigationProp<RootStackParamList,'Fogotpassword'>;

const ForgotPasswordScreen: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetCode = () => {
    // Implement your logic to send OTP
    console.log('Sending OTP to', mobileNumber);
  };

  const handleVerify = () => {
    // Implement your verification logic
    console.log('Verifying OTP', otp);
  };
  const navigation = useNavigation<ForgotPasswordScreenProp>();

  return (
    <ImageBackground
    source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac6982fdb50cd1f88b52bce27032bc7539107183dbacd539013f658115084bef?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf' }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.3)']}
        style={styles.container}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.getCodeButton} onPress={handleGetCode}>
            <Text style={styles.getCodeText}>Get Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
        />
        </View>
       
        <TouchableOpacity style={styles.verifyButton} onPress={()=> navigation.navigate("Emailinput")}>
          <Text style={styles.verifyText} >Verify</Text>
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
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  getCodeButton: {
    backgroundColor: '#20B2AA',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  getCodeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#FFD700',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  verifyText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;