import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for better icon options
import { useNavigation } from '@react-navigation/native'; // Navigation for settings

export default function ProfileScreen() {
    const navigation = useNavigation(); // Hook to handle navigation

    return (
        <View style={styles.container}>
            {/* Settings Icon at the top-right corner of the screen */}
            <TouchableOpacity
                style={styles.settingsIcon}
                onPress={() => navigation.navigate('Settings')} // Navigate to Settings screen
            >
                <Ionicons name="settings-outline" size={28} color="black" />
            </TouchableOpacity>

            {/* User Profile Card */}
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                />
                <Text style={styles.name}>Patrick Harris</Text>
                <View style={styles.countryContainer}>
                    <Image
                        style={styles.countryFlag}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg' }}
                    />
                    <Text style={styles.countryName}>Germany</Text>
                </View>

                {/* Stats Container */}
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

            {/* Visa Details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Visa Details</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}>Visa Type: 1 Year Multiple Entry</Text>
                    <Text style={styles.detailsText}>Duration: 30 days</Text>
                    <Text style={styles.detailsText}>Visa No: 111111</Text>
                </View>
            </View>

            {/* Scrollable Personal Details */}
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
        top: 40,  // Adjust as needed for padding
        right: 20, // Adjust as needed for padding
        zIndex: 1,
    },
    profileContainer: {
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        paddingVertical: 10, // Reduce padding to make more space
        paddingHorizontal: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 10, // Reduce top margin to make more space
    },
    profileImage: {
        width: 70, // Reduce image size to save space
        height: 70,
        borderRadius: 35,
    },
    name: {
        fontSize: 18, // Adjust font size
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
        fontSize: 14, // Adjust font size for better alignment
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Spread the items evenly
        marginTop: 10,
        width: '100%', // Take full width for better spacing
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 14, // Adjust font size
        fontWeight: 'bold',
        marginTop: 3,
    },
    statLabel: {
        fontSize: 12, // Adjust font size for better spacing
        color: '#666',
    },
    section: {
        marginHorizontal: 20,
        marginVertical: 10, // Add some vertical spacing between sections
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
        maxHeight: 150, // Limit the height of the scroll area for personal details
        marginHorizontal: 20,
    },
});
