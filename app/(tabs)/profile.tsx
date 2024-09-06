import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation();

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
});
