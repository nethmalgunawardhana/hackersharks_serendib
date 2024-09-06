import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList ={ 
    OTPenter:undefined; 
    Passwordreset:undefined;
    Login:undefined;
  
};
type PasswordResetScreenProp = StackNavigationProp<RootStackParamList,'Passwordreset'>;

const PasswordResetScreen: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const handleReset = () => {
    // Implement your password reset logic here
    console.log('Resetting password');
    if (newPassword === confirmPassword) {
        console.log('New password:', newPassword);
        navigation.navigate('Login'); 
    } else {
        console.log('Passwords do not match');
    }
};
 const navigation = useNavigation<PasswordResetScreenProp>();
  return (
    <ImageBackground
    source={{ uri: 'https://example.com/your-background-image.jpg' }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(255,255,255,0.7)', 'rgba(255,255,255,0.3)']}
        style={styles.container}
      >
        <Text style={styles.headerText}>Please enter your new password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
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
  headerText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#FFD700',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PasswordResetScreen;