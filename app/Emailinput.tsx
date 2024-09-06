import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList ={

    Fogotpassword:undefined;
    Emailinput:undefined;
    OTPenter:undefined;
};
type EmailInputScreenProp = StackNavigationProp<RootStackParamList,'Emailinput'>;

const EmailInputScreen: React.FC = () => {
  const [email, setEmail] = useState('');


 const navigation = useNavigation<EmailInputScreenProp>();
  return (
    <ImageBackground
    source={{ uri: 'https://example.com/your-background-image.jpg' }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(255,255,255,0.7)', 'rgba(0,0,0,0.3)']}
        style={styles.container}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={()=> navigation.navigate("OTPenter")}>
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
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 15,
    borderRadius: 5,
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

export default EmailInputScreen;