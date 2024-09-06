import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Alert, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase'; // Make sure this path is correct

type RootStackParamList = {
  Splash: undefined;
  Registration: undefined;
  Login: undefined;
};

type RegistrationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Registration'>;

const RegistrationScreen: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const navigation = useNavigation<RegistrationScreenNavigationProp>();

  const handleRegistration = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      // Here you can add logic to save additional user information (fullName, nationality, etc.) to your database
      Alert.alert('Success', 'Registration successful', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/01c7fb320140bb6964cfcc1a0c795df384b3e1a58c4e3a166ea034d2f740e5ac?placeholderIfAbsent=true&apiKey=3efecf631c114a9d8587bb6512f6adcf' }} // Replace with your image URL or require your local asset
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.formContainer}
          >
            <Text style={styles.header}>Fill Your Details</Text>
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Nationality"
                value={nationality}
                onChangeText={setNationality}
            />
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={gender}
                onChangeText={setGender}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          </ImageBackground>  
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (styles remain the same)
  container: {
    flex: 1,
  },
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
