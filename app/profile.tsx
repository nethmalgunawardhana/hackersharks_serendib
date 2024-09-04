import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for better icon options

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Settings Icon at the top-right corner of the screen */}
            <TouchableOpacity style={styles.settingsIcon}>
                <Ionicons name="settings-outline" size={28} color="black" />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
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

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Visa Details</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Visa Type: 1 Year Multiple Entry</Text>
                        <Text style={styles.detailsText}>Duration: 30 days</Text>
                        <Text style={styles.detailsText}>Visa No: 111111</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Personal Details</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Full Name: Patrick Harris</Text>
                        <Text style={styles.detailsText}>Address: 889 Berlin Germany 8111</Text>
                        <Text style={styles.detailsText}>Contact: +67 29213212122</Text>
                    </View>
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
    scrollContainer: {
        paddingBottom: 20,
    },
    profileContainer: {
        backgroundColor: '#e3f2fd',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        margin: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
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
        fontSize: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Spread the items evenly
        marginTop: 20,
        width: '100%', // Take full width for better spacing
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
        flex: 1, // Ensures each stat takes equal space
    },
    statNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        margin: 20,
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
});
