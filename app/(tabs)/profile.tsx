import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = { 
    SettingsScreen: undefined;
    ProfileScreen: undefined;
    Eligibility: undefined;
};
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const [showVisaQuestion, setShowVisaQuestion] = useState(false);
    const [showVisaNumberEntry, setShowVisaNumberEntry] = useState(false);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [showVisaDetails, setShowVisaDetails] = useState(false);
    const VisaQuestionPopup = () => (
        <Modal visible={showVisaQuestion} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Do you already have a visa?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setShowVisaQuestion(false)}>
                            <Text style={styles.modalButtonText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {
                            setShowVisaQuestion(false);
                            setShowVisaNumberEntry(true);
                        }}>
                            <Text style={styles.modalButtonText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

    const VisaNumberEntryPopup = () => (
        <Modal visible={showVisaNumberEntry} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enter your visa number</Text>
                    <TextInput style={styles.input} placeholder="Visa number" />
                    <TouchableOpacity style={styles.modalButton} onPress={() => {
                        setShowVisaNumberEntry(false);
                        setShowOTPVerification(true);
                    }}>
                        <Text style={styles.modalButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    const OTPVerificationPopup = () => (
        <Modal visible={showOTPVerification} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>OTP Verification</Text>
                    <TextInput style={styles.input} placeholder="Mobile Number" />
                    <TouchableOpacity style={styles.modalButton}>
                        <Text style={styles.modalButtonText}>Get Code</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.input} placeholder="OTP Number" />
                    <TouchableOpacity 
                        style={styles.modalButton} 
                        onPress={() => {
                            setShowOTPVerification(false);
                            setShowVisaDetails(true);
                        }}
                    >
                        <Text style={styles.modalButtonText}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    const VisaDetailsPopup = () => (
        <Modal visible={showVisaDetails} transparent={true} animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Visa Details</Text>
                    <View style={styles.visaDetailsContainer}>
                        <Text style={styles.visaDetailText}>Name: Mathew Drew</Text>
                        <Text style={styles.visaDetailText}>Duration: 30 Days</Text>
                        <Text style={styles.visaDetailText}>Visa Type: Tourist</Text>
                        <Text style={styles.visaDetailText}>Visa Number: 119036</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.modalButton}
                        onPress={() => {
                            setShowVisaDetails(false);
                            navigation.navigate('Eligibility');
                        }}>
                        <Text style={styles.modalButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.settingsIcon}
                onPress={() => navigation.navigate('SettingsScreen')}
            >
                <Ionicons name="settings-outline" size={28} color="black" />
            </TouchableOpacity>

            <View style={styles.profileContainer}>
                <View style={styles.hexagonContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                    />
                </View>
                <Text style={styles.name}>Patrick Harris</Text>
                <View style={styles.countryContainer}>
                    <Image
                        style={styles.countryFlag}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg' }}
                    />
                    <Text style={styles.countryName}>Germany</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Ionicons name="airplane-outline" size={24} color="blue" />
                        <Text style={styles.statNumber}>4,950</Text>
                        <Text style={styles.statLabel}>Trips</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Ionicons name="star-outline" size={24} color="gold" />
                        <Text style={styles.statNumber}>1.2K</Text>
                        <Text style={styles.statLabel}>Points</Text>
                    </View>
                    <View style={styles.statItem}>
                        <FontAwesome name="comments-o" size={24} color="green" />
                        <Text style={styles.statNumber}>897</Text>
                        <Text style={styles.statLabel}>Comments</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Visa Details</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.noVisaText}>You have not added any visa details.</Text>
                    <TouchableOpacity 
                        style={styles.processVisaButton} 
                        onPress={() => setShowVisaQuestion(true)}
                    >
                        <Text style={styles.processVisaButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <VisaQuestionPopup />
            <VisaNumberEntryPopup />
            <OTPVerificationPopup />
            <VisaDetailsPopup />
           
            <ScrollView style={styles.personalDetailsScroll}>
                <Text style={styles.sectionTitle}>Personal Details</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>Full Name: Patrick Harris</Text>
                    <Text style={styles.detailsText}>Address: 889 Berlin Germany 8111</Text>
                    <Text style={styles.detailsText}>Contact: +67 29213212122</Text>
                    <Text style={styles.detailsText}>Date of Birth: 03-12-2024</Text>
                    <Text style={styles.detailsText}>Passport No: 6162626261616161</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.floatingButton}>
                <Ionicons name="add-outline" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    visaDetailsContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
    },
    visaDetailText: {
        fontSize: 16,
        marginBottom: 5,
    },
    settingsIcon: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },
    profileContainer: {
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10,
    },
    hexagonContainer: {
        width: 100,
        height: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        clipPath: 'polygon(50% 0%, 86% 25%, 100% 63%, 75% 100%, 25% 100%, 0% 63%, 14% 25%)',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryFlag: {
        width: 24,
        height: 16,
        marginRight: 5,
    },
    countryName: {
        fontSize: 14,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: '100%',
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 3,
    },
    statLabel: {
        fontSize: 12,
        color: '#666',
    },
    section: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailsContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
    personalDetailsScroll: {
        maxHeight: 150,
        marginHorizontal: 20,
    },
    noVisaText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    processVisaButton: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    processVisaButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        minWidth: 100,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    floatingButton: {
        backgroundColor: '#ff6f61',
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});