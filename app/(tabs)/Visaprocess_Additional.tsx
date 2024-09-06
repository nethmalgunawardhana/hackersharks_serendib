import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Contact: undefined;
  Additional: undefined;
  Summary: undefined;
};

type AdditionalDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Additional'>;

interface AdditionalDetails {
  dateOfArrival: Date | undefined;
  portOfEntry: string;
  placeOfStay: string;
  dateOfDeparture: Date | undefined;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  countryCode: string;
  sriLankanMobileNumber: string;
}

const AdditionalDetails: React.FC = () => {
  const navigation = useNavigation<AdditionalDetailsNavigationProp>();

  const [details, setDetails] = useState<AdditionalDetails>({
    dateOfArrival: undefined,
    portOfEntry: '',
    placeOfStay: '',
    dateOfDeparture: undefined,
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    countryCode: '',
    sriLankanMobileNumber: '',
  });

  const [showDatePicker, setShowDatePicker] = useState({
    dateOfArrival: false,
    dateOfDeparture: false,
  });

  const handleChange = (name: keyof AdditionalDetails, value: string | Date | undefined) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleDatePicker = (field: keyof typeof showDatePicker) => {
    setShowDatePicker(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onDateChange = (event: any, selectedDate: Date | undefined, field: keyof AdditionalDetails) => {
    const currentDate = selectedDate || details[field];
    if (Platform.OS === 'android') {
      toggleDatePicker(field as keyof typeof showDatePicker);
    }
    handleChange(field, currentDate);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'DD/MM/YYYY';
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  const renderDateField = (label: string, field: keyof AdditionalDetails & keyof typeof showDatePicker) => (
    <View>
      <Text style={styles.label}>{label}<Text style={styles.required}>*</Text></Text>
      <TouchableOpacity
        style={styles.dateInput}
        onPress={() => toggleDatePicker(field)}
      >
        <Text style={details[field] ? styles.dateText : styles.placeholderText}>
          {formatDate(details[field])}
        </Text>
      </TouchableOpacity>
      {showDatePicker[field] && (
        <DateTimePicker
          value={details[field] || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, selectedDate) => onDateChange(event, selectedDate, field)}
        />
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Additional Details</Text>

      {renderDateField('Date of Arrival in Sri Lanka', 'dateOfArrival')}

      <Text style={styles.label}>Port of Entry in Sri Lanka<Text style={styles.required}>*</Text></Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={details.portOfEntry}
          onValueChange={(value) => handleChange('portOfEntry', value)}
        >
          <Picker.Item label="Select The Port" value="" />
          <Picker.Item label="Colombo" value="Colombo" />
          <Picker.Item label="Galle" value="Galle" />
          <Picker.Item label="Hambantota" value="Hambantota" />
        </Picker>
      </View>

      <Text style={styles.label}>Place of Stay in Sri Lanka<Text style={styles.required}>*</Text></Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={details.placeOfStay}
          onValueChange={(value) => handleChange('placeOfStay', value)}
        >
          <Picker.Item label="Hotel/Lodge/Home" value="" />
          <Picker.Item label="Hotel" value="Hotel" />
          <Picker.Item label="Lodge" value="Lodge" />
          <Picker.Item label="Home" value="Home" />
        </Picker>
      </View>

      {renderDateField('Date of Proposed departure', 'dateOfDeparture')}

      <Text style={styles.label}>Address Line 1 in Sri Lanka<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        value={details.addressLine1}
        onChangeText={(value) => handleChange('addressLine1', value)}
        placeholder="Enter Address Line 1"
      />

      <Text style={styles.label}>Address Line 2 in Sri Lanka<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        value={details.addressLine2}
        onChangeText={(value) => handleChange('addressLine2', value)}
        placeholder="Enter Address Line 2"
      />

      <Text style={styles.label}>City<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        value={details.city}
        onChangeText={(value) => handleChange('city', value)}
        placeholder="Enter City"
      />

      <Text style={styles.label}>State<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        value={details.state}
        onChangeText={(value) => handleChange('state', value)}
        placeholder="Enter State"
      />

      <Text style={styles.label}>Zipcode<Text style={styles.required}>*</Text></Text>
      <TextInput
        style={styles.input}
        value={details.zipcode}
        onChangeText={(value) => handleChange('zipcode', value)}
        placeholder="Enter Zipcode"
      />

      <Text style={styles.label}>Country Code</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={details.countryCode}
          onValueChange={(value) => handleChange('countryCode', value)}
        >
          <Picker.Item label="Select Country Code" value="" />
          <Picker.Item label="+1 (USA)" value="+1" />
          <Picker.Item label="+44 (UK)" value="+44" />
          <Picker.Item label="+94 (Sri Lanka)" value="+94" />
        </Picker>
      </View>

      <Text style={styles.label}>Sri Lankan Mobile Number</Text>
      <TextInput
        style={styles.input}
        value={details.sriLankanMobileNumber}
        onChangeText={(value) => handleChange('sriLankanMobileNumber', value)}
        placeholder="Enter Sri Lankan Mobile Number"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Summary')}>
        <Text style={styles.buttonText}>Save and Continue</Text>
      </TouchableOpacity>
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
    
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  required: {
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 50,
    color: '#7D7777',
    
    fontSize: 22,
    paddingLeft: 10,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 50,
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#7D7777',
    
    fontSize: 22,
  },
  dateText: {
    color: '#000',
    
    fontSize: 22,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    color: '#7D7777',
    
    fontSize: 22,
    paddingLeft: 10,
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

export default AdditionalDetails;