import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { getDocumentAsync } from 'expo-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const VisaProcessUpload: React.FC = () => {

  const [passportPhoto, setPassportPhoto] = useState<string | null>(null);
  const [bioPage, setBioPage] = useState<string | null>(null);
  const [additionalDocument, setAdditionalDocument] = useState<string | null>(null);

  const handleDocumentPick = async (setFile: React.Dispatch<React.SetStateAction<string | null>>) => {
    const result = await getDocumentAsync({
      type: 'image/jpeg',
    });
    if (result.type === 'success') {
      setFile(result.name);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Upload Document</Text>
        <Text style={styles.topic}>
          Please upload the required document
        </Text>
        <View style={styles.container}>
          <View style={styles.uploadContainer}>
            <Text style={styles.title}>
              Passport size colored photo
              <Text style={styles.required}>*</Text>
            </Text>
            <Text style={styles.fileInfo}>.jpg files up to 1MB</Text>
            <TouchableOpacity onPress={() => handleDocumentPick(setPassportPhoto)}>
              <Text style={passportPhoto ? styles.editUpload : styles.chooseFile}>
                {passportPhoto ? 'Edit and Upload' : 'Choose file'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.title}>
              Passport Bio Page
              <Text style={styles.required}>*</Text>
            </Text>
            <Text style={styles.fileInfo}>.jpg files up to 1MB</Text>
            <TouchableOpacity onPress={() => handleDocumentPick(setBioPage)}>
              <Text style={bioPage ? styles.editUpload : styles.chooseFile}>
                {bioPage ? 'Edit and Upload' : 'Choose file'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.title}>Additional Document</Text>
            <Text style={styles.fileInfo}>.jpg files up to 1MB</Text>
            <TouchableOpacity onPress={() => handleDocumentPick(setAdditionalDocument)}>
              <Text style={additionalDocument ? styles.editUpload : styles.chooseFile}>
                {additionalDocument ? 'Edit and Upload' : 'Choose file'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Go Back pressed')}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Save and Continue pressed')}>
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
    fontFamily: 'inter',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 215, 
  },
  topic: {
    fontSize: 26,
    fontFamily: 'inter',
    fontWeight: 'semibold',
    marginBottom: 10,
    color: '#777'
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    marginLeft : -30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'semibold',
    marginBottom: 8,
  },
  required: {
    color: 'red',
  },
  fileInfo: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  chooseFile: {
    color: 'orange',
    fontWeight: 'bold',
  },
  editUpload: {
    color: 'orange',
    fontWeight: 'bold',
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

export default VisaProcessUpload;