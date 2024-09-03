import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2ZpbGV8ZW58MHx8fHwxNjAwMzEyNzU0&ixlib=rb-1.2.1&q=80&w=400' }}
                    />
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
                            <Ionicons name="globe-outline" size={24} color="blue" />
                            <Text style={styles.statText}>4,950 Trips</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="star-outline" size={24} color="gold" />
                            <Text style={styles.statText}>1.2K Points</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="chatbubbles-outline" size={24} color="green" />
                            <Text style={styles.statText}>897 Comments</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Visa Details</Text>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsText}>Visa Type: 1 Year Multiple Entry</Text>
                        <Text style={styles.detailsText}>Duration: 30 day</Text>
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
    scrollViewContent: {
        paddingBottom: 96, 
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
        justifyContent: 'space-around',
        marginTop: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statText: {
        marginTop: 5,
        fontSize: 16,
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
    menuBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    menuBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
    },
    addButton: {
        backgroundColor: 'orange',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});