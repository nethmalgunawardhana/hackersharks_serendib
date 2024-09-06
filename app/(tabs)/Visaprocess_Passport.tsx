import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  UploadFile: undefined;
  Passport: undefined;
  Contact: undefined;
};

type PassportDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'Passport'>;

interface PassportDetails {
  passportNumber: string;
  dateOfIssue: Date | undefined;
  dateOfExpiry: Date | undefined;
  dateOfBirth: Date | undefined;
  title: string;
  givenName: string;
  surname: string;
  placeOfIssue: string;
  placeOfBirth: string;
  maritalStatus: string;
  gender: string;
}

const PassportDetails: React.FC = () => {
  const navigation = useNavigation<PassportDetailsNavigationProp>();

  const [details, setDetails] = useState<PassportDetails>({
    passportNumber: '',
    dateOfIssue: undefined,
    dateOfExpiry: undefined,
    dateOfBirth: undefined,
    title: '',
    givenName: '',
    surname: '',
    placeOfIssue: '',
    placeOfBirth: '',
    maritalStatus: '',
    gender: '',
});

const [showDatePicker, setShowDatePicker] = useState({
    dateOfIssue: false,
    dateOfExpiry: false,
    dateOfBirth: false,
});

const handleChange = (name: keyof PassportDetails, value: string | Date | undefined) => {
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

const onDateChange = (event: any, selectedDate: Date | undefined, field: keyof PassportDetails) => {
    const currentDate = selectedDate || details[field];
    if (Platform.OS === 'android') {
        toggleDatePicker(field as keyof typeof showDatePicker);
    }
    handleChange(field, currentDate);
};

const formatDate = (date: Date | undefined) => {
    if (!date) return 'DD/MM/YYYY';
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const renderDateField = (label: string, field: keyof PassportDetails & keyof typeof showDatePicker) => (
    <View>
        <Text style={styles.label}>{label}<Text style={{color: 'red'}}>*</Text></Text>
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
        <Text style={styles.header}>Passport Details</Text>

        <Text style={styles.label}>Passport Number<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.input}
            value={details.passportNumber}
            onChangeText={(value) => handleChange('passportNumber', value)}
            placeholder="Enter Passport Number"
        />

        {renderDateField('Passport Date of Issue', 'dateOfIssue')}
        {renderDateField('Passport Date of Expiry', 'dateOfExpiry')}
        {renderDateField('Date of Birth', 'dateOfBirth')}

        <Text style={styles.label}>Title<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={details.title}
                onValueChange={(value) => handleChange('title', value)}
            >
                <Picker.Item label="Select Title" value="" />
                <Picker.Item label="Mr" value="Mr" />
                <Picker.Item label="Mrs" value="Mrs" />
                <Picker.Item label="Ms" value="Ms" />
                <Picker.Item label="Dr" value="Dr" />
            </Picker>
        </View>

        <Text style={styles.label}>Given Name as per passport<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.input}
            value={details.givenName}
            onChangeText={(value) => handleChange('givenName', value)}
            placeholder="Enter Given Name"
        />

        <Text style={styles.label}>Surname as per passport<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.input}
            value={details.surname}
            onChangeText={(value) => handleChange('surname', value)}
            placeholder="Enter Surname"
        />

        <Text style={styles.label}>Passport Place of Issue<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.input}
            value={details.placeOfIssue}
            onChangeText={(value) => handleChange('placeOfIssue', value)}
            placeholder="Enter Place of Issue"
        />

        <Text style={styles.label}>Place of Birth<Text style={{color: 'red'}}>*</Text></Text>
        <TextInput
            style={styles.input}
            value={details.placeOfBirth}
            onChangeText={(value) => handleChange('placeOfBirth', value)}
            placeholder="Enter Place of Birth"
        />

        <Text style={styles.label}>Marital Status<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={details.maritalStatus}
                onValueChange={(value) => handleChange('maritalStatus', value)}
            >
                <Picker.Item label="Select Marital Status" value="" />
                <Picker.Item label="Single" value="Single" />
                <Picker.Item label="Married" value="Married" />
                <Picker.Item label="Divorced" value="Divorced" />
                <Picker.Item label="Widowed" value="Widowed" />
            </Picker>
        </View>

        <Text style={styles.label}>Gender<Text style={{color: 'red'}}>*</Text></Text>
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={details.gender}
                onValueChange={(value) => handleChange('gender', value)}
            >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Other" value="Other" />
            </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
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
    fontFamily: 'outrun-future',
    fontWeight: 'bold',
    marginBottom: 20,
  },
label: {
    fontSize: 24,
    fontFamily: 'outrun-future',
    fontWeight: 'semibold',
    marginBottom: 5,
  },
input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 50,
    color: '#7D7777',
    fontFamily: 'outrun-future',
    fontSize: 22,
    paddingLeft: 10,
},
dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
},
placeholderText: {
    color: '#7D7777',
    fontFamily: 'outrun-future',
    fontSize: 22,
},
dateText: {
    color: '#000',
    fontFamily: 'outrun-future',
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
    fontFamily: 'outrun-future',
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

export default PassportDetails;