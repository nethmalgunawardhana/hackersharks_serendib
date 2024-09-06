import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Eligibility: undefined;
  UploadFile: undefined;

};

type VisaProcessEligibleNavigationProp = StackNavigationProp<RootStackParamList, 'Eligibility'>;

type Country = 'China' | 'India' | 'Indonesia' | 'Russia' | 'Thailand' | 'Malaysia' | 'Japan' | 'Other';
type VisaType = 'Tourist' | 'Business' | 'Student' | 'Work';

const VisaProcessEligible: React.FC = () => {
  const [nationality, setNationality] = useState<Country | ''>('');
  const [countryOfResident, setCountryOfResident] = useState<Country | ''>('');
  const [visaType, setVisaType] = useState<VisaType | ''>('');

  const countries: Country[] = ['China', 'India', 'Indonesia', 'Russia', 'Thailand', 'Malaysia', 'Japan', 'Other'];
  const visaTypes: VisaType[] = ['Tourist', 'Business', 'Student', 'Work'];

  const navigation = useNavigation<VisaProcessEligibleNavigationProp>();
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Eligibility Criteria</Text>
      
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select Your Nationality<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker<Country | ''>
            selectedValue={nationality}
            onValueChange={(itemValue) => setNationality(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Country" value="" />
            {countries.map((country, index) => (
              <Picker.Item key={index} label={country} value={country} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Country Of Resident<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker<Country | ''>
            selectedValue={countryOfResident}
            onValueChange={(itemValue) => setCountryOfResident(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Country" value="" />
            {countries.map((country, index) => (
              <Picker.Item key={index} label={country} value={country} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Visa Type<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
          <Picker<VisaType | ''>
            selectedValue={visaType}
            onValueChange={(itemValue) => setVisaType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Visa Type" value="" />
            {visaTypes.map((type, index) => (
              <Picker.Item key={index} label={type} value={type} />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.note}>
        Visa Fees: For China, India, Indonesia, Russia, Thailand, Malaysia And Japan 0 USD, Other visa 40 USD.
      </Text>
      <Text style={styles.note}>
        Please Note : Through this app you can only apply for tourist visa and every visa has charged an additional 10-15 USD service fee. Does not include charges towards payment gateway, taxes and others transaction fees.
      </Text>

      <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('UploadFile')}>
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
    paddingLeft: 10,
  },
  note: {
    fontSize: 20,
    fontWeight: 'semibold',
    marginBottom: 10,
    color: '#000',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'semibold',
  },
});

export default VisaProcessEligible;