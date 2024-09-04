import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Gold</Text>
                    </View>
                    <Text style={styles.greeting}>Hi Harris!</Text>
                </View>
                <TouchableOpacity style={styles.settingsIcon}>
                    <Ionicons name="settings-outline" size={28} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Current Trip Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Current Trip</Text>
                    <View style={styles.tripCard}>
                        <View style={styles.tripHeader}>
                            <Text style={styles.tripName}>HIGHLAND ESCAPE</Text>
                            <Text style={styles.tripDate}>22 August 2024</Text>
                        </View>
                        <Text style={styles.tripSubtitle}>Next Stop: Nine Arch</Text>
                        <View style={styles.tripDetails}>
                            <Text style={styles.tripDetailItem}>Queens</Text>
                            <Text style={styles.tripDetailItem}>Park</Text>
                            <Text style={styles.tripDetailItem}>Colombo Fort</Text>
                        </View>
                        <View style={styles.tripFooter}>
                            <Text style={styles.tripFooterItem}>9 Travelers</Text>
                            <Text style={styles.tripFooterItem}>LKR 80,000</Text>
                            <TouchableOpacity>
                                <Text style={styles.detailsButton}>DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Upcoming Trips Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Upcoming Trips</Text>
                    <View style={styles.tripCard}>
                        <View style={styles.tripHeader}>
                            <Text style={styles.tripName}>NORTHERN HERITAGE</Text>
                            <Text style={styles.tripDate}>30 August 2024</Text>
                        </View>
                        <View style={styles.tripDetails}>
                            <Text style={styles.tripDetailItem}>Jaffna Fort</Text>
                            <Text style={styles.tripDetailItem}>Point Pedro</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.detailsButton}>DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Hire a Guide Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Hire a Guide</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.guideCard}>
                            <Image
                                style={styles.guideImage}
                                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                            />
                            <Text style={styles.guideName}>Kiyan Gathota</Text>
                            <Text style={styles.guideDetails}>124 Trips - Colombo</Text>
                            <TouchableOpacity style={styles.hireButton}>
                                <Text style={styles.hireButtonText}>HIRE NOW</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.guideCard}>
                            <Image
                                style={styles.guideImage}
                                source={{ uri: 'https://randomuser.me/api/portraits/men/33.jpg' }}
                            />
                            <Text style={styles.guideName}>Sumudu Kodikara</Text>
                            <Text style={styles.guideDetails}>124 Trips - French/German</Text>
                            <TouchableOpacity style={styles.hireButton}>
                                <Text style={styles.hireButtonText}>HIRE NOW</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Add more guide cards as needed */}
                    </ScrollView>
                </View>
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>

           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
    },
    scrollViewContent: {
        paddingBottom: 86, 
      },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    badge: {
        backgroundColor: '#FFD700',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    badgeText: {
        fontWeight: 'bold',
        color: '#ffffff',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingsIcon: {
        padding: 5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    tripCard: {
        backgroundColor: '#e3f2fd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    tripHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tripName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    tripDate: {
        color: 'gray',
    },
    tripSubtitle: {
        marginVertical: 5,
        color: 'gray',
    },
    tripDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    tripDetailItem: {
        color: 'black',
    },
    tripFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    tripFooterItem: {
        color: 'black',
    },
    detailsButton: {
        color: '#1e88e5',
        fontWeight: 'bold',
    },
    guideCard: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        width: 150,
        alignItems: 'center',
    },
    guideImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
    },
    guideName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 5,
    },
    guideDetails: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 10,
        textAlign: 'center',
    },
    hireButton: {
        backgroundColor: '#1e88e5',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    hireButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    fab: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        backgroundColor: '#1e88e5',
        borderRadius: 30,
        padding: 15,
        elevation: 5,
        paddingBottom: 70,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
    },
});
