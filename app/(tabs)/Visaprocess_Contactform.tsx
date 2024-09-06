import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Passport: undefined;
  Contact: undefined;
  Additional: undefined;
};

type ContactDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Contact'>;

const ContactDetails: React.FC = () => {
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  const navigation = useNavigation<ContactDetailsNavigationProp>();

  // This is a placeholder. In a real app, you'd have a proper list of country codes.
  const countryCodes = ['+1', '+44', '+91', '+86'];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Contact Details</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Personal Email Address<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Country Code<Text style={styles.required}>*</Text></Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={countryCode}
              onValueChange={(itemValue) => setCountryCode(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Country Code" value="" />
              {countryCodes.map((code, index) => (
                <Picker.Item key={index} label={code} value={code} />
              ))}
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Mobile Phone Number<Text style={styles.required}>*</Text></Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Facebook</Text>
          <TextInput
            style={styles.input}
            value={facebook}
            onChangeText={setFacebook}
            placeholder="Enter your Facebook profile"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Twitter</Text>
          <TextInput
            style={styles.input}
            value={twitter}
            onChangeText={setTwitter}
            placeholder="Enter your Twitter handle"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Instagram</Text>
          <TextInput
            style={styles.input}
            value={instagram}
            onChangeText={setInstagram}
            placeholder="Enter your Instagram handle"
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.saveButton]} 
          onPress={() => navigation.navigate('Additional')}>
          <Text style={styles.buttonText}>Save and Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 48,
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 115,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    fontFamily: 'outrun-future',
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    color: '#7D7777',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 22,
    fontFamily: 'outrun-future',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    color: '#7D7777',
    fontFamily: 'outrun-future',
    fontSize: 22,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'semibold',
  },
});

export default ContactDetails;