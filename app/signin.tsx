import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
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
        <LinearGradient
            colors={['#87CEEB', '#20B2AA']}
            style={styles.background}
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
        </LinearGradient>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... (styles remain the same)
});

export default RegistrationScreen;
