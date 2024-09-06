import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { getDocumentAsync } from 'expo-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Eligibility: undefined;
  UploadFile: undefined;
  Passport: undefined;
};

type VisaProcessUploadNavigationProp = StackNavigationProp<RootStackParamList, 'UploadFile'>;

const PopupWindow = ({ visible, onClose, onUpload }: { visible: boolean, onClose: () => void, onUpload: (file: string) => void }) => {
  const handleChooseFile = async () => {
    const result = await getDocumentAsync({
      type: 'image/*',
    });
    if (result.type === 'success') {
      onUpload(result.url);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text style={styles.popupHeader}>Instructions</Text>
          <Text style={styles.popupText}>• Image background should be white in color.</Text>
          <Text style={styles.popupText}>• Please use the crop window (dotted line window) to select the area in the photo.</Text>
          <Text style={styles.popupText}>• Click 'Upload' button to upload the image.</Text>
          <Text style={styles.popupText}>• This image will be uploaded on the Sri Lanka E-VISA application.</Text>
          <Text style={styles.popupText}>• Have you read the photo specifications?</Text>
          
          <Text style={styles.popupHeader}>Notes:</Text>
          <Text style={styles.popupText}>• Uploaded file size should not exceed [1024]KB.</Text>
          <Text style={styles.popupText}>• Time limit for photo editing will be 20 minutes.</Text>
          
          <TouchableOpacity style={styles.chooseFileContainer} onPress={handleChooseFile}>
            <Text style={styles.chooseFileText}>Choose file</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const VisaProcessUpload: React.FC = () => {

  const [passportPhoto, setPassportPhoto] = useState<string | null>(null);
  const [bioPage, setBioPage] = useState<string | null>(null);
  const [additionalDocument, setAdditionalDocument] = useState<string | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const navigation = useNavigation<VisaProcessUploadNavigationProp>();

  const handleDocumentPick = async (setFile: React.Dispatch<React.SetStateAction<string | null>>) => {
    const result = await getDocumentAsync({
      type: 'image/*',
    });
    if (result.type === 'success') {
      setFile(result.url);
    }
  };

  const handleUpload = (file: string) => {
    setPassportPhoto(file);
    setPopupVisible(false);
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
            <TouchableOpacity onPress={() => setPopupVisible(true)}>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Passport')}>
          <Text style={styles.buttonText}>Save and Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <PopupWindow 
        visible={popupVisible} 
        onClose={() => setPopupVisible(false)} 
        onUpload={handleUpload}
      />
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
  scrollViewContent: {
    paddingBottom: 215, 
  },
  topic: {
    fontSize: 26,
    
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
  popupContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  popupHeader: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popupText: {
    fontSize: 20,
    marginBottom: 5,
  },
  chooseFileContainer: {
    height: 120,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  chooseFileText: {
    paddingTop: 20,
    color: '#777',
    fontSize: 22,
  },
  closeButton: {
    height: 60,
    backgroundColor: '#ff6600',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  closeButtonText: {
    paddingTop: 6,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VisaProcessUpload;

